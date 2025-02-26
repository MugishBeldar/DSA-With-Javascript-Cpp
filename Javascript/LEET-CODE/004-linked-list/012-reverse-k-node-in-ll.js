// 25. Reverse Nodes in k-Group

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

const { printSl, covertArrToSLL } = require("../../util");

// Function to reverse a linked list
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// Function to get the Kth node from a given position in the linked list
function getKthNode(temp, k) {
  k -= 1;
  while (temp !== null && k > 0) {
    temp = temp.next;
    k--;
  }
  return temp;
}

// Function to reverse nodes in groups of K
// time complexity O(n)
function kReverse(head, k) {
  let temp = head;
  let prevLast = null;

  while (temp !== null) {
    let kThNode = getKthNode(temp, k);
    if (kThNode === null) {
      if (prevLast) prevLast.next = temp;
      break;
    }

    let nextNode = kThNode.next;
    kThNode.next = null;
    reverseLinkedList(temp);

    if (temp === head) {
      head = kThNode;
    } else {
      prevLast.next = kThNode;
    }

    prevLast = temp;
    temp = nextNode;
  }
  return head;
}

// Test the function
let arr = [1, 2, 3, 4, 5];
let k = 2;
let head = covertArrToSLL(arr);
console.log("Original List:");
printSl(head);
head = kReverse(head, k);
console.log("Reversed in k-groups:");
printSl(head);
