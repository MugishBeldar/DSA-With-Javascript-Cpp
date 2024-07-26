/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

  // use hars and tortois algorith 
  let slowPointer = head;
  let fastPointer = head;

  while(fastPointer!==null && fastPointer.next!== null) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
      if(fastPointer===slowPointer) {
          return true;
      }
  }
  return false
};

// time complexity = O(n);