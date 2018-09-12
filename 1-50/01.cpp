class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
                int flag=0,i,j;
        vector<int> result;
        result.resize(2);
        for(i=0;i<nums.size();i++){
            for(j=i+1;j<nums.size();j++){
                if(nums[i]+nums[j]==target){
                    flag=1;
                    break;
                }
            }
            if(flag==1)
                break;
        }
        result[0]=i;
        result[1]=j;
        return result;
    }
};