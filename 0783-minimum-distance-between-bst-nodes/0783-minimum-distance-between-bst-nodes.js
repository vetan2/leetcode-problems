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
    let arr = [];

    const travel = (node) => {
      if(!node) return;

      arr.push(node.val);
      travel(node.left);
      travel(node.right);
    };

    travel(root);

    let res = 987654321;
    for(let i = 0; i< arr.length; i++) {
      for(let j=i+1; j< arr.length; j++) {
        res = Math.min(res, Math.abs(arr[i]-arr[j]));
        if(res === 0) return 0;
      }
    }
    
    return res;
};