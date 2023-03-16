/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }

  const travel = (is, ie, ps, pe) => {
    if (is > ie) {
      return undefined
    }

    if (is === ie) {
      return new TreeNode(inorder[is], undefined, undefined)
    }

    const cv = postorder[pe]
    const cvInorderLoc = inorder.indexOf(cv) - is

    return new TreeNode(
      cv,
      cvInorderLoc
        ? travel(is, is + cvInorderLoc - 1, ps, ps + cvInorderLoc - 1)
        : undefined,
      cvInorderLoc !== pe
        ? travel(is + cvInorderLoc + 1, ie, ps + cvInorderLoc, pe - 1)
        : undefined,
    )
  }

  return travel(0, inorder.length - 1, 0, postorder.length - 1)
}
