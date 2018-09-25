/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x == 0)
        return 0;
    let flag = x>0?1:-1;
    x = [...Math.abs(x).toString()].reverse().join('');
    if(parseFloat(x) > 2**31-1||parseFloat(x)<(2**31)*-1)
        return 0;
    return parseInt(x)*flag;
};
//用计算的方式会比这种转字符串再转回来的方式速度更快