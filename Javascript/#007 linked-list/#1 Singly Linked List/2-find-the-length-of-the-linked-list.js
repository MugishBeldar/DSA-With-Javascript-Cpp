// Find the Length of a Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (value !== undefined) {
      let newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  size() {
    if (!this.head) return this.length;
    let size = 1;
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
      size++;
    }
    return size;
  }
}

const myLinkedList = new LinkedList(0);
// console.log(myLinkedList.push(1));
// console.log(myLinkedList.push(2));
// console.log(myLinkedList.push(3));
myLinkedList.push(1)
myLinkedList.push(1)
myLinkedList.push(1)
myLinkedList.push(1)
console.log(myLinkedList.size());