// You are given a linked list where each element in the list is a node and have an integer data. You need to add 1 to the number formed by concatinating all the list node numbers together and return the head of the modified linked list. 

// Note: The head represents the first element of the given array.

// Input: LinkedList: 4->5->6
// Output: 457

// Explanation: 4->5->6 represents 456 and when 1 is added it becomes 457. 

// Input: LinkedList: 1->2->3
// Output: 124

// Explanation:  1->2->3 represents 123 and when 1 is added it becomes 124. 

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Reverse the linked list
function reverse(head) {
  let prev = null;
  let temp = head;
  while (temp) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}

function addOne(head) {
  let rev = reverse(head);
  let carry = 1;
  let current = rev;
  let prev = null;

  while (current) {
    let sum = current.value + carry;
    current.value = sum % 10;
    carry = Math.floor(sum / 10);
    prev = current;
    current = current.next;
  }

  if (carry > 0) {
    prev.next = new Node(carry);
  }

  return reverse(rev);
}

function printList(head) {
  let result = [];
  while (head) {
    result.push(head.value);
    head = head.next;
  }
  console.log(result.join("->"));
}

let head = new Node(9);
head.next = new Node(9);
head.next.next = new Node(9);

console.log("Original List:");
printList(head);

head = addOne(head);

console.log("Modified List:");
printList(head);
