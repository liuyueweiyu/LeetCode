class Solution {
public:
    int maxArea(vector<int>& height) {
        int len = height.size() - 1;
        int ans = 0;
        int _start = 0, _end = len;

        while (_start < _end){
            ans = max(min(height[_start], height[_end])*len, ans);
            if (height[_start] < height[_end])
                _start++;
            else
                _end--;
            len--;
        }
        return ans;
    }
};