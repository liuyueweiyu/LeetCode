/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    let num = parseInt(str);
    if (isNaN(num))
        return 0;
    if(num > 2**31-1 )
        return 2 ** 31 - 1;
    if (num < (-1) * 2 ** 31)
        return (-1) * 2 ** 31;
    return num;
};