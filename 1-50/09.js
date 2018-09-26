/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    x = x.toString();
    let _start = 0,
        _end = x.length - 1;
    while (_start <= _end) {
        if(x[_start] != x[_end])
            return false;
        _start++;
        _end--;
    }
    return true;
};