// Node creation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List creation
let head = new Node(0);
let second = new Node(1);
let third = new Node(2);
let four = new Node(3);
let five = new Node(4);

// Linking nodes
head.next = second;
second.next = third;
third.next = four;
four.next = five;

// Creating a loop (cycle) in the list: five -> second
five.next = second;

// optimal approach 
// first detect loop using hare and tortoise algorithm
// if loop detect than move fast pointer one step and count length until meet slow pointer in side a loop
// return length
// if har and tortoise algo reach end of the ll return -1 no loop is present.

// Time complexity : O(n)
// Space complexity : O(1)
function lengthOfLoop(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let loopLength = 1;
      fast = fast.next;
      while (slow !== fast) {
        fast = fast.next;
        loopLength++;
      }
      return loopLength;
    }
  }
  return -1;
}

console.log(lengthOfLoop(head));
