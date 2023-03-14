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
var sumNumbers = function(root) {
    let result = 0;

    const travel = (node, num) => {
      if(!node) {
        return;
      }

      const newNum = num * 10 + node.val;

      if(!node.left && !node.right) {
        result += newNum;
        return;
      }

      if(node.left) {
        travel(node.left, newNum);
      }

      if(node.right) {
        travel(node.right, newNum);
      }
    };

    travel(root, 0);

    return result;
};