class Solution {
public:
    string convert(string s, int numRows) {
        int len = s.length();
        if (numRows == 1 || len == 1)
            return s;
        char ans[1010] = { 0 };
        int index = 0;
        int space = 2 * numRows - 2;
        for (int i = 0; i < numRows;i++) {
            for (int j = i; j < len; j += space) {
                ans[index++] = s[j];
                if (i == 0 || i == numRows - 1)
                    continue;
                if (j + space - 2 * (j%space) < len)        //每行的两个取摸相加为space
                    ans[index++] = s[j + space - 2*(j%space)];
            }
        }
        return ans;
    }
};