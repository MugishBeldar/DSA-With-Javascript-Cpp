
// broute approach 
class Node {
  constructor(x = null, nextNode = null, childNode = null) {
    this.data = x;
    this.next = nextNode;
    this.child = childNode;
  }
}

// Function to convert an array to a linked list
function convertArrToLinkedList(arr) {
  // Create a dummy node to serve as
  // the head of the linked list
  let dummyNode = new Node(-1);
  let temp = dummyNode;

  // Iterate through the array and
  // create nodes with array elements
  for (let val of arr) {
    // Create a new node with the array element
    temp.child = new Node(val);
    // Move the temporary pointer
    // to the newly created node
    temp = temp.child;
  }

  // Return the linked list starting
  // from the next of the dummy node
  return dummyNode.child;
}

// Function to flatten a linked list with child pointers
function flattenLinkedList(head) {
  let arr = [];

  // Traverse through the linked list
  while (head) {
    // Traverse through the child
    // nodes of each head node
    let t2 = head;
    while (t2) {
      // Store each node's data in the array
      arr.push(t2.data);
      // Move to the next child node
      t2 = t2.child;
    }
    // Move to the next head node
    head = head.next;
  }

  // Sort the array containing
  // node values in ascending order
  arr.sort((a, b) => a - b);

  // Convert the sorted array
  // back to a linked list
  return convertArrToLinkedList(arr);
}

// Print the linked list by
// traversing through child pointers
function printLinkedList(head) {
  while (head) {
    console.log(head.data + " ");
    head = head.child;
  }
  console.log();
}

// Print the linked list
// in a grid-like structure
function printOriginalLinkedList(head, depth = 0) {
  while (head) {
    console.log(head.data);

    // If child exists, recursively
    // print it with indentation
    if (head.child) {
      process.stdout.write(" -> ");
      printOriginalLinkedList(head.child, depth + 1);
    }

    // Add vertical bars
    // for each level in the grid
    if (head.next) {
      console.log("| ".repeat(depth));
    }
    head = head.next;
  }
}

// Create a linked list with child pointers
let head = new Node(5);
head.child = new Node(14);

head.next = new Node(10);
head.next.child = new Node(4);

head.next.next = new Node(12);
head.next.next.child = new Node(20);
head.next.next.child.child = new Node(13);

head.next.next.next = new Node(7);
head.next.next.next.child = new Node(17);

// Print the original
// linked list structure
console.log("Original linked list:");
printOriginalLinkedList(head);

// Flatten the linked list
// and print the flattened list
let flattened = flattenLinkedList(head);
console.log("\nFlattened linked list: ");
printLinkedList(flattened);


// optimal approach 

class Node {
  // Constructors to initialize the
  // data, next, and child pointers
  constructor() {
    this.data = 0;
    this.next = null;
    this.child = null;
  }

  constructor(x) {
    this.data = x;
    this.next = null;
    this.child = null;
  }

  constructor(x, nextNode, childNode) {
    this.data = x;
    this.next = nextNode;
    this.child = childNode;
  }
}

// Merges two linked lists in a
// particular order based on the data value
function merge(list1, list2) {
  // Create a dummy node as
  // a placeholder for the result
  let dummyNode = new Node(-1);
  let res = dummyNode;

  // Merge the lists based on data values
  while (list1 !== null && list2 !== null) {
    if (list1.data < list2.data) {
      res.child = list1;
      res = list1;
      list1 = list1.child;
    } else {
      res.child = list2;
      res = list2;
      list2 = list2.child;
    }
    res.next = null;
  }

  // Connect the remaining
  // elements if any
  if (list1) {
    res.child = list1;
  } else {
    res.child = list2;
  }

  // Break the last node's
  // link to prevent cycles
  if (dummyNode.child) {
    dummyNode.child.next = null;
  }

  return dummyNode.child;
}

// Flattens a linked list
// with child pointers
function flattenLinkedList(head) {
  // If head is null or there
  // is no next node, return head
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively flatten the
  // rest of the linked list
  let mergedHead = flattenLinkedList(head.next);
  head = merge(head, mergedHead);
  return head;
}

// Print the linked list by
// traversing through child pointers
function printLinkedList(head) {
  while (head !== null) {
    console.log(head.data + " ");
    head = head.child;
  }
  console.log();
}

// Print the linked list
// in a grid-like structure
function printOriginalLinkedList(head, depth) {
  while (head !== null) {
    console.log(head.data);

    // If child exists, recursively
    // print it with indentation
    if (head.child) {
      console.log(" -> ");
      printOriginalLinkedList(head.child, depth + 1);
    }

    // Add vertical bars for
    // each level in the grid
    if (head.next) {
      console.log();
      for (let i = 0; i < depth; ++i) {
        console.log("| ");
      }
    }
    head = head.next;
  }
}

// Create a linked list
// with child pointers
let head = new Node(5);
head.child = new Node(14);
head.next = new Node(10);
head.next.child = new Node(4);
head.next.next = new Node(12);
head.next.next.child = new Node(20);
head.next.next.child.child = new Node(13);
head.next.next.next = new Node(7);
head.next.next.next.child = new Node(17);

// Print the original linked list structure
console.log("Original linked list:");
printOriginalLinkedList(head, 0);

// Flatten the linked list
// and print the flattened list
let flattened1 = flattenLinkedList(head);
console.log("\nFlattened linked list: ");
printLinkedList(flattened1);


