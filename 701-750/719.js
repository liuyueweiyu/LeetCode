/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function check(dis,k,nums) {
    let len = nums.length,
        sum = 0;
    for(let  i =1;i < len;i++){
        let j;
        for(j = 0;j < i ;j ++)
            if(nums[i]-nums[j] <= dis)
                break;
        sum += i - j;
        if(sum >= k)
            return false;
    }
    return true;
}
var smallestDistancePair = function (nums, k) {
    nums.sort((a,b)=>a-b);
    let _start = 0,
        _end = nums[nums.length - 1] -nums[0],
        _mid = 0;
    while (_start < _end) {
        _mid = Math.floor((_start + _end) / 2);
        if(check(_mid,k,nums))
            _start = _mid + 1;
        else
            _end = _mid ;
    }
    return _end;
};