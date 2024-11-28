class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    if (value !== undefined) {
      this.first = new Node(value);
      this.length = 1;
    } else {
      this.first = null;
      this.length = 0;
    }
  }

  // Push method
  push(value) {
    if (!this.first) {
      this.first = new Node(value);
      this.length = 1;
    }
    let newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
  }

  // Pop method
  pop() {
    if (!this.first) {
      return undefined;
    }
    const poppedNode = this.first;
    this.first = this.first.next;
    this.length--;
  }
}

const myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);