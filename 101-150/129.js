/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    if(!root)
        return 0;
    let ans = 0;
    function dfs(root, val) {
        const value = val*10 + root.val;
        if(!root.left &&! root.right){
            ans+=value;
            return;
        }
        if(root.left)
            dfs(root.left, value);
        if(root.right)
            dfs(root.right,value);
        return;
    }
    dfs(root,'');
    
    return ans;
};
