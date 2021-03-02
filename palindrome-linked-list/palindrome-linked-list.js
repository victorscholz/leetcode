/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) {
      return true
    }
    
    let slow = head
    let fast = head
    let current = head
    
    while (fast !== null && fast.next !== null) {
      slow = slow.next
      fast = fast.next.next
    }
  
    let stack = []
    
    while (slow !== null) {
      stack.push(slow.val)
      slow = slow.next
    }
  
    while (stack.length) {
      if (current.val !== stack.pop()) {
        return false
      }
      current = current.next
    }
    return true
};