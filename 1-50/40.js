/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
    candidates = candidates.filter(v => v <= target);
    candidates.sort((a, b) => a - b);
    const len = candidates.length,
          visit = [];
    const ans = new Array();
    for (let i = 0; i < len; i++) {
        visit[i] = false;
    }
    function dfs(step, sum, arr, target, start) {
        if (sum == target) {
            ans.push(arr);
            return;
        }
        for (let i = start; i < len; i++) {
            if (i != start && candidates[i] == candidates[i - 1])
                continue;
            const counter = sum + candidates[i];
            if (counter == target) {
                ans.push([...arr, candidates[i]]);
            } else if (counter > target)
                break;
            else
                dfs( step + 1, counter, [...arr, candidates[i]], target, i + 1);
        }
        return;
    }
    dfs(0, 0, [], target, 0);
    return ans;

};