// 2095. Delete the Middle Node of a Linked List

// broute force 
// get size of the ll
// get mid point of the ll acc. to problem
// delete that elm
// handle edge case like length 0 and 1
// tc = O(n)
// sc = O(1);
function size(head) {
  if (!head) return 0;
  if (head && !head.next) return 1;
  let length = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    length++;
  }
  return length;
}
var deleteMiddle = function (head) {
  let length = size(head);
  if (length === 0 || length === 1) {
    let newhead = head.next;
    head = null;
    return newhead;
  }
  let delInd = Math.floor(length / 2)
  let tempInd = 1;
  let temp = head;
  while (temp) {
    if (tempInd == delInd) {
      if (!temp.next) {
        temp.next = null
      } else {
        temp.next = temp.next.next;
      }
    }
    temp = temp.next;
    tempInd++;
  }
  return head;
};

// optimal approach
// har and tortois algorithm
// tc = O(N/2)
// sc = O(1)
var deleteMiddle = function (head) {
  if (!head || !head.next) return null;
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;
  return head;
};
