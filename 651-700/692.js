/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    var len = words.length,
          m = new Map(),
          ans = [];
    for (let i = 0; i < len; i++) {
        if(m.has(words[i]))
            m.set(words[i], m.get(words[i]) + 1);
        else
            m.set(words[i], 1 );
    }
    m = [...m].sort((a, b) => {
        if(a[1] < b[1])
            return 1;
        else if (a[1] > b[1]) 
            return -1;
        else 
            if (a[0] < b[0])
                return -1;
            else if(a[0] > b[0])
                return 1;
            else
                return 0;
    })
    for (let i = 0; i < k; i++) {
        ans[i] = m[i][0];
    }
    return ans;
};