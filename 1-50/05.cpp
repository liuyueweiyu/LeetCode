class Solution {
public:
    string longestPalindrome(string s) {
        int len = s.length();
        //构建新字符串
        char news[2012];
        int p[2012] = { 0 };
        news[0] = '@';
        for (int i = 1; i < len+1; i++){
            news[2 * i - 1] = '#';
            news[2 * i] = s[i - 1];
        }
        news[2 * len + 1] = '#'; news[2 * len + 2] = 0;

        len = 2 * len + 2;
        int pos = 0, mx = 0, maxlen = 0, maxindex = 0;
        for (int i = 1; i < len; i++){
            if (i < mx)				//判断i是否在mx左边，如果不在的话就不在当前已知回文串区域
                p[i] = min(p[pos * 2 - i], mx - i);		//在的话它一定关于pos对称的那个点对称情况在回文区域相同，所以超出mx的部分不可以直接计算
            else
                p[i] = 1;

            while (news[i - p[i]] == news[i + p[i]])	//在当前已知的p[i]情况下继续判断p[i]是不是有可能更大
                p[i]++;

            if (mx < p[i] + i) {	//更新mx和pos
                pos = i;
                mx = p[i] + i;
            }

            //记录最长回文子串
            if (maxlen < p[i] - 1) {
                maxlen = p[i] - 1;
                maxindex = pos * 2 - mx + 1;
            }
        }
        //拼接最小回文子串
        for (int i = 0; i < maxlen; i++)
            news[i] = news[maxindex + i * 2 + 1];
        news[maxlen] = 0;
        return news;

    }