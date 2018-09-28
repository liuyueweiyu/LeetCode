class Solution {
public:
	string longestCommonPrefix(vector<string>& strs) {
		int len = strs.size();
		if (len == 0)
			return "";
		if (len == 1)
			return strs[0];
		int minsize = strs[0].length();
		for (int i = 1; i < len; i++)
			minsize = min((int)strs[i].length(),minsize);
		int flag = minsize;
		for (int i = 0; i < minsize; i++)
			for (int j = 1; j < len; j++)
				if (strs[0][i] != strs[j][i])
					flag = i, i = minsize + 1, j = len + 1;
		return strs[0].substr(0, flag);
	}
};