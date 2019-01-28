/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    let ans = '';
    while (A !=0 && B != 0) {
        if (A - B > 1) {
            ans += 'aab';
            A -= 2;
            B--;
        }
        else if(B - A > 1){
            ans += 'bba';
            B -= 2;
            A--;
        }
        else{
            if(ans[ans.length - 1] =='a')
                ans += 'ba';
            else
                ans += 'ab';
            A--;B--;
        }
    }
    if(B==1){
        ans += 'b';
    }
    if (B ==2) {
        ans += 'bb';
    }   
    if(A == 1)
        ans += 'a';
    if (A == 2) {
        ans += 'aa';
    }
    return ans;
};