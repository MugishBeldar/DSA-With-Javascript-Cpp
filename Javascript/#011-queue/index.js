class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    if (value !== undefined) {
      this.first = new Node(value);
      this.last = this.first;
      this.length = 1;
    } else {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  }

  inQueue(value) {
    if (!this.first) {
      this.first = new Node(value);
      this.last = this.first;
      this.length = 1;
      return this;
    }
    let newNode = new Node(value);
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }

    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(0);
console.log(myQueue.inQueue(1));
console.log(myQueue.dequeue());
console.log(myQueue)