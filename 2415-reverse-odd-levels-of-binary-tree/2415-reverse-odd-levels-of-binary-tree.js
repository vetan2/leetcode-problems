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
    const levQueue = [0];
    
    while(queue.length) {
        const lev =levQueue[0]
        const arr = [];
        while(lev === levQueue[0]) {
            if((levQueue[0] ?? 0) % 2) {
               arr.push(queue[0]);
            }
        
            const node = queue.shift();
            levQueue.shift();

            if(node.left) {
                queue.push(node.left);
                queue.push(node.right);
                levQueue.push(lev + 1);
                levQueue.push(lev + 1);
            }
        }
    
        arr.map(node => node.val).reverse().forEach((val, index) => {
            arr[index].val = val;
        });
    }

    return root;
};