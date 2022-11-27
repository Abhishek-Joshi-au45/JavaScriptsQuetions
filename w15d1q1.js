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
 * @return {boolean}
 */

 var height = function(node){
    if(node == null){
        return 0
    }
    return Math.max(height(node.left),height(node.right))+1
}

var isBalanced = function(root) {
   if(root == null){
        return true
    }
   
    let lh = height(root.left) //3
    let rh = height(root.right) //3
 
    let l = isBalanced(root.left) //l = false
    let r = isBalanced(root.right) //r = false
 
    if(Math.abs(lh-rh)<=1 && l==true && r==true){
        return true
    }
   
    return false
};