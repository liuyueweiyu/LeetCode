class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int pos[256], _start = -1, len = s.length(),_ans = 0;
        memset(pos, -1, sizeof(pos));
        for (int i = 0; i < len; i++) {
            if (pos[s[i]] > _start) {   //该字符出现过
                _start = pos[s[i]];
            }
            _ans = max(_ans, i - _start);
            pos[s[i]] = i;
        }
        return _ans;
    }
};