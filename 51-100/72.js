/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    //dp[i][j] = the min step with converting word1 with len1 to word2 with len2
    const dp = new Array(len1+1);

    for (let i = 0; i <= len1; i++){        //base
        dp[i] = new Array(len2+2);
        dp[i][0] = i;
    }
        
    for (let j  =0; j <= len2;j++)
        dp[0][j] = j;
    for(let i = 1;i <= len1 ; i++)          
        for(let j = 1;j<= len2;j++){
            if(word1[i-1] == word2[j-1])
                dp[i][j] = dp[i-1][j-1];
            else
                dp[i][j] = dp[i-1][j-1] +1;
            //update function
            dp[i][j] = Math.min(dp[i][j],dp[i-1][j]+1,dp[i][j-1]+1);
        }
    return dp[len1][len2];
};
