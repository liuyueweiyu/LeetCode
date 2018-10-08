/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const arr = [
        ['a','b','c'],
        ['d','e','f'],
        ['g','h','i'],
        ['j','k','l'],
        ['m','n','o'],
        ['p','q','r','s'],
        ['t','u','v'],
        ['w','x','y','z']
    ];
    const len = digits.length;
    if(len === 0)
        return [];
    let ans = arr[digits[0]-2];
    for (let i = 1;i < len;i++){
        const anslen = ans.length;
        let newans = [];
        for(let j = 0;j<anslen;j++){
            for(let k = 0;k < arr[digits[i] - 2].length;k++){
                newans.push(ans[j] + arr[digits[i]-2][k]);
            }
        }
        ans = newans;
    }
    return ans;
};