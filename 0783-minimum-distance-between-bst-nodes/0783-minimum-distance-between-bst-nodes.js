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
    const arr = [];

    const travel = (node) => {
      if(!node) return;

      travel(node.left);
      arr.push(node.val);
      travel(node.right);
    };

    travel(root);

    let res = 987654321;
    for(let i = 0; i < arr.length - 1; i += 1) {
      res = Math.min(res, arr[i+1] - arr[i])
    }
    
    return res;
};