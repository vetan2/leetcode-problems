/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let prev = -987654321;
    let res = 987654321;

    const travel = (node) => {
      if(!node) return;
        
      travel(node.left);
           res = Math.min(res, node.val - prev);
        prev = node.val;
      travel(node.right);
    };

    travel(root);
    
    return res;
};