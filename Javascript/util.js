class DllNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

function printDl(dll) {
  let current;
  if (dll.head) {
    current = dll.head;
  } else {
    current = dll;
  }
  let result = "";

  while (current) {
    result += current.value;
    if (current.next) {
      result += ' <-> ';
    }
    current = current.next;
  }

  console.log(result);
}

function convertArrToDLL(arr) {
  if (arr.length === 0) return null; // Handle empty array
  let head = new DllNode(arr[0]); // Create the head node with the first element
  let prev = head; // Initialize 'prev' to the head node

  for (let i = 1; i < arr.length; i++) {
    let temp = new DllNode(arr[i], null, prev);
    prev.next = temp;
    prev = temp;
  }
  return head; // Return the head of the doubly linked list
}

module.exports = Object.freeze({
  printDl,
  convertArrToDLL,
})