const { convertArrToDLL, printDl } = require("../../util");

let arr = [0, 1, 2, 3, 4, 5];
const head = convertArrToDLL(arr);
printDl(head);

// broute force 
// we map all value to the hash map
// then traverse tha dll nad assigned popped value to the dll node
// tc = on + on = on
// sc = on
function reverse(head) {
  let map = [];
  let temp = head;
  while (temp) {
    map.push(temp.value);
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    temp.value = arr.pop();
    temp = temp.next;
  }
  return head;
}

// const rev = reverse(head);
// printDl(rev);

// optimal approach used swapping of two variable 

// Function to reverse a doubly linked list
function reverseDLL(head) {
  // Check if the list is empty
  // or has only one node
  if (head === null || head.next === null) {
    // No change is needed;
    // return the current head
    return head;
  }

  // Initialize a pointer to
  // the previous node
  let prev = null;

  // Initialize a pointer
  // to the current node
  let current = head;

  // Traverse the linked list
  while (current !== null) {
    // Store a reference to
    // the previous node
    prev = current.prev;

    // Swap the previous
    // and next pointers
    current.prev = current.next;

    // This step reverses the links
    current.next = prev;

    // Move to the next node
    // in the original list
    current = current.prev;
  }

  // The final node in the original
  // list becomes the new head after reversal
  return prev.prev;
}

const re = reverseDLL(head);
printDl(re);