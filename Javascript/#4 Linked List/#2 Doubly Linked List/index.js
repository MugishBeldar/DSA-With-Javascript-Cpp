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
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  // Push method in doubly linked list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add the new node at the end
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this; // Return the updated list
  }

  // Pop method 
  pop() {
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
    return this;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      // If the list is empty, set the new node as both head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Add the new node at the beginning
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this; // Return the updated list
  }

  shift() {
    if (!this.head) {
      return undefined; // Return undefined if the list is empty
    }

    const oldHead = this.head; // Store the current head to return later

    if (this.length === 1) {
      // If there's only one node in the list
      this.head = null;
      this.tail = null;
    } else {
      // Update the head and remove references to the old head
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;

    return oldHead; // Return the removed node
  }


}

const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);
myDoublyLinkedList.pop();
myDoublyLinkedList.unshift(0);
myDoublyLinkedList.shift();
console.log(myDoublyLinkedList);