// Q-2 )Remove Duplicates from Sorted List
/*
Given the head of a sorted linked list, delete all duplicates such that each
element appears only once. Return the linked list sorted as well.
Example 1:
Input: head = [1,1,2]
Output: [1,2]
*/



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    let curr = head;
    while(curr) {
        while(curr.next && curr.val == curr.next.val) {
              curr.next = curr.next.next
        }
        curr = curr.next;
    }
    return head;
};