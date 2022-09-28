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
 * @return {number[]}
 */
var findMode = function(root) {
    let map = {};
    
    const traverse = (node) => { 
        map[node.val] ? map[node.val] += 1 : map[node.val] = 1 ;
        if (node.left){
            traverse(node.left);
        }
        if (node.right){
            traverse(node.right);
        }
    }
    
    traverse(root);

    let value = [];
    let max = map[root.val];
    
    for (let i in map){
        if (map[i] > max){
            max = map[i];
        }
    }
    
    for (let i in map){
        if (map[i] === max){
            value.push(i);
        }
    }
    
    return value ;
    
};