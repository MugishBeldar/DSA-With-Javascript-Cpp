const { printDl } = require("../../util");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    if (value !== undefined) {
      let newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  // Push method
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // If tail reference is given
  pop() {
    if (!this.head) return undefined; // List is empty

    const poppedNode = this.tail;

    if (this.length === 1) {
      // Only one node in the list
      this.head = null;
      this.tail = null;
    } else {
      // More than one node
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null; // Clean up the popped node's reference
    }

    this.length--;
    return poppedNode;
  }

  // if tail reference is not given
  pop1() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    temp.prev = null;
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    oldHead.next = null
    return oldHead;
  }
}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(999);
myDoublyLinkedList.pop1();
myDoublyLinkedList.unshift(0);
printDl(myDoublyLinkedList)
console.log(myDoublyLinkedList.shift());
printDl(myDoublyLinkedList);


