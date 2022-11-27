/*
235. Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two
given nodes in the BST
*/



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    while (root) {
    if (root.val < p.val && root.val < q.val) {
        root = root.right;
    }
    else if (root.val > p.val && root.val > q.val) {
        root = root.left;
    } else {
        break;
    }
}
return root;
};