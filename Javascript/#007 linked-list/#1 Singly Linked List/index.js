class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (value) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  // Push a new node into the singly linked list
  push(value) {
    const newNode = new Node(value);
    if (this.head) {
      this.tail.next = newNode; // Append to the current tail
      this.tail = newNode; // Update the tail reference
      this.length++;
    } else {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  // Pop a node from the singly linked list
  pop() {
    if (!this.head) {
      return undefined; // If the list is empty, return undefined.
    }

    let prev = this.head;
    let temp = this.head;

    // Traverse the list until temp reaches the last node
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    if (this.length === 1) {
      // Special case: only one node in the list
      this.head = null;
      this.tail = null;
    } else {
      // Normal case: more than one node
      this.tail = prev;
      this.tail.next = null;
    }

    this.length--;
    return temp; // Return the removed node
  }

  // Unshift a node from the singly linked list
  unshift(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length++;
      return this;
    }
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined; // If the list is empty, return undefined.
    }
    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      // Special case: only one node in the list
      this.tail = null;
    }
    return temp; // Return the removed node
  }

  getFirst() {
    return this.head
  }

  getLast() {
    // 1st
    // return this.tail;

    // 2nd
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }

  get(index) {
    let counter = 0;
    let temp = this.head;

    while (temp.next) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) {
      return false; // Index out of bounds
    }

    let currentNode = this.get(index); // Get the node at the specified index
    if (currentNode) {
      currentNode.value = value; // Update the node's value
      return true
    }

    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false; // Index out of bounds
    }

    const newNode = new Node(value);

    if (index === 0) {
      // Insert at the head
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) {
        this.tail = newNode; // If the list was empty, update the tail
      }
    } else if (index === this.length) {
      // Insert at the tail
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // Insert in the middle
      const prevNode = this.get(index - 1); // Get the node before the insertion point
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }

    this.length++;
    return true; // Return true to indicate success
  }

  size() {
    let size = 1;
    if(!this.length) {
      return 0;
    }
    let temp = this.head;
    while(temp.next) {
      size++;
      temp = temp.next;
    }
    return size;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }

}

// Example usage
const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
// console.log(myLinkedList);

//-------------- pop method
// console.log("Before pop:", myLinkedList); // LinkedList with nodes 1 -> 2 -> 3

// const removedNode1 = myLinkedList.pop();
// console.log("Removed node:", removedNode1); // Node with value 3
// console.log("After pop:", myLinkedList);    // LinkedList with nodes 1 -> 2

// const removedNode2 = myLinkedList.pop();
// console.log("Removed node:", removedNode2); // Node with value 2
// console.log("After pop:", myLinkedList);    // LinkedList with node 1

// const removedNode3 = myLinkedList.pop();
// console.log("Removed node:", removedNode3); // Node with value 1
// console.log("After all pops:", myLinkedList); // Empty LinkedList

//-------------- unshift
const unshift = myLinkedList.unshift(0);
console.log(unshift)

//-------------- shift
// console.log(myLinkedList)
// myLinkedList.shift();
// myLinkedList.shift();
// myLinkedList.shift();
// console.log(myLinkedList)

//---------------- get first
// console.log(myLinkedList.getFirst())

//---------------- get last
// console.log(myLinkedList.getLast())


//--------------- get node by index
// console.log(myLinkedList.get(0));

//---------------- set node by index and value
// console.log(myLinkedList.set(0, 11))

//---------------- insert node specific node 
// console.log(myLinkedList.insert(1, 11));

//---------------- get siZe 
// console.log(myLinkedList.size());

//---------------- clear 
// console.log(myLinkedList.clear());



