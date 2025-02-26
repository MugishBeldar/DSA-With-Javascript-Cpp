// Given a linked list where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to the head side, 2s at the end of the linked list, and 1s in the middle of 0s and 2s.

// Input: LinkedList: 1->2->2->1->2->0->2->2
// Output: 0->1->1->2->2->2->2->2
// Explanation: All the 0s are segregated to the left end of the linked list, 2s to the right end of the list, and 1s in between.

// Input: LinkedList: 2->2->0->1
// Output: 0->1->2->2
// Explanation: After arranging all the 0s,1s and 2s in the given format, the output will be 0 1 2 2.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// creation of ll
let head = new Node(1);
let second = new Node(0);
let third = new Node(1);
let four = new Node(2);
let five = new Node(0);
let six = new Node(2);

// link nodes
head.next = second;
second.next = third;
third.next = four;
four.next = five;
five.next = six;

function sortll(head) {
  let arr = [];
  let temp = head;
  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }
  arr = arr.sort((a, b) => a - b);
  temp = head;
  let ind = 0;
  while (temp) {
    temp.value = arr[ind];
    ind++;
    temp = temp.next;
  }
  return head;
}

console.log(sortll(head));
