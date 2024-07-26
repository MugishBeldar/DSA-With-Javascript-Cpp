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
var reverseList = function (head) {
  // let prev = null;
  // let nextNode = null;
  // let current = head
  // while(current) {
  //     nextNode = current.next;
  //     current.next = prev;
  //     prev = current;
  //     current = nextNode;
  // }
  // return prev;

  let temp = head;
  let prev = null;
  let next = temp
  // let counter = 0
  while(temp) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
    // counter++;
  }
  return prev;
};
// three pointer approch 
// time complexity :- O(n)
