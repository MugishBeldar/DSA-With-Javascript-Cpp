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
    if (value === undefined || value === null) {
      throw new Error('can not be add')
    }
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
  search(value) {
    if (value === undefined || value === null) {
      throw new Error('search require one parameter as value');
    }
    if (!this.head) {
      return false;
    }
    let temp = this.head;
    while (temp.next) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.push(0)
myLinkedList.push(1)
myLinkedList.push(2);
console.log(myLinkedList);
console.log(myLinkedList.search(1));