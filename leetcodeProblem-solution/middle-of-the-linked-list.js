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
var size = function(head) {
  let length = 1;
  let temp = head;
  let next = null;
  while(temp.next) {
      next = temp.next;  
      temp = next;
      length++;
  }
  return length;
}
var middleNode = function(head) {

  // // 1st method 
  // const length = size(head); // n times
  // let counter = 0
  // let temp = head;
  // let next = null;
  // while(!(counter===Math.floor(length/2))) {  // n times
  //     next = temp.next;
  //     temp = next;
  //     counter ++;
  // }
  // return temp;

  // 2nd method 
  let sp = head;
  let fp = head;
  while(fp!==null && fp.next!==null) {
      sp = sp.next;
      fp = fp.next.next;
  }
  return sp;
};

// two pointer method 1st method
//  time complexity :--- O(n) + O(n) = 2O(n) ==> O(n)