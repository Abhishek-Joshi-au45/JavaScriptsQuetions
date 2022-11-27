//  Merge In Between Linked Lists
/*
given two linked lists: list1 and list2 of sizes n and m respectively.
Remove list1's nodes from the ath node to the bth node, and put list2 in their
place.
The blue edges and nodes in the following figure incidate the result:
Build
the result list and return its head.
Example 1:
Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [0,1,2,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their
place. The blue edges and nodes in the above figure indicate the result.
*/




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeInBetween = function(list1, a, b, list2) {
    let head = list1;
    let i = 0;
    
    let node1 = list1;
    let node2 = list2;
    
    while (i <= b) {
        const next = node1.next;
        
        if (i === a - 1) {
            node1.next = node2;
        }
        
        node1 = next;
        
        if (i >= a && node2.next) {
            node2 = node2.next;
        }
        
        i++;
    }
    
    while (node2 && node2.next) {
        node2 = node2.next;
    }
    
    node2.next = node1;
    
    return head;
};