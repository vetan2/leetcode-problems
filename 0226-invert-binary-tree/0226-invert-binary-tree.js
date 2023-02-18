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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const travel = (node) => {
        if(!node) return;
        
        const temp = node.right;
        node.right = node.left;
        node.left = temp;
        
        
        travel(node.left);
        travel(node.right);
    }
    
    travel(root);
    
    return root;
};