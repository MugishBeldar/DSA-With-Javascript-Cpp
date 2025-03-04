const { covertArrToSLL, printSl } = require("../../util");


// 61. Rotate List

// broute force but not work time limit exceeded
var size = (head) => {
  let length = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    length++;
  }
  return length;
}
var getLastNode = (head) => {
  let temp = head;
  while (temp.next) {
    temp = temp.next;
  }
  return temp;
}
var reverse = (head) => {
  let temp = head;
  let prev = null;
  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}
var rotateRight = (head, k) => {
  // intuation 
  // base case. if head is empty then return head;
  // 1. first reverse the given linked list 
  // 2. then move k element at the end of the linked list
  // 3. then reverse the linked list and return it
  // 1.     rev 5 4 3 2 1
  //     4 3 2 1 5
  //     3 2 1 5 4
  //     ans rev 4 5 1 2 3
  // 2.    rev 2 1 0
  //     1 0 2
  //     0 2 1
  //     2 1 0
  //     1 0 2
  //     ans rev 2 0 1

  // base  case. if head is empty then return head;
  let length = size(head);
  // console.log(length);
  if (!length || (length == 1)) return head;
  // 1. first reverse the given linked list
  head = reverse(head);
  // console.log('reverse head : ', head)
  // 2. then move k element at the end of the linked list
  while (k > 0) {
    let firstNode = head;
    let lastNode = getLastNode(head);
    // console.log('lastNode : ', lastNode);
    head = firstNode.next;
    firstNode.next = null;
    lastNode.next = firstNode;
    k--;
  }
  // console.log('neav head : ', head);  
  // 3. then reverse the linked list and return it;
  head = reverse(head);
  return head;
};

// const arr = [1, 2, 3, 4, 5];
// const k = 2;
// let head = covertArrToSLL(arr);
// console.log('original head')
// printSl(head);
// console.log('roatated head');
// printSl(rotateRight(head, k));


// optimal approach 
// time complexity O(n);
// space complexity O(1)
var getKthNode = (head, k) => {
  let temp = head;
  while (k > 1) {
    temp = temp.next;
    k--;
  }
  return temp;
};

var rotateRightOprimal = (head, k) => {
  if (!head || !head.next || k === 0) return head;

  let len = 1, tail = head;
  while (tail.next != null) {
    len++;
    tail = tail.next;
  }

  k = k % len;
  if (k === 0) return head;

  tail.next = head;
  let newTail = getKthNode(head, len - k);
  head = newTail.next;
  newTail.next = null;
  return head;
};

const arr = [1, 2, 3, 4, 5];
const k = 2;
let head = covertArrToSLL(arr);
console.log('original head')
printSl(head);
console.log('roatated head');
printSl(rotateRightOprimal(head, k));
