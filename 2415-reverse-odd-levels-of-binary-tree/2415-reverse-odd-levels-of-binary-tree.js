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
var reverseOddLevels = function(root) {
    const queue = [root];
    let lev = 0;
    
    while(queue.length) {
        const arr = [];
        for(let i = 0; i < 2 ** lev; i++) {
            arr.push(queue[0]);
        
            const node = queue.shift();

            if(node.left) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
        if(lev % 2) {
            arr.map(node => node.val).forEach((val, index) => {
            arr.at(-1 -index).val = val;
        });
        }

        lev++;
    }

    return root;
};