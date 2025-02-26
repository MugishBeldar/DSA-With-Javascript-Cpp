class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    if (value) {
      this.first = new Node(value);
      this.length = 1;
    } else {
      this.first = null;
      this.length = 0;
    }
  }

  push(value) {
    if (!this.first) {
      this.first = new Node(value);
      this.length = 1;
      return this;
    }
    let newNode = new Node(value);
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
    return this;
  }

  minStack() {
    if (this.length === 0) return null;
    if (this.length === 1) return this.first.value;
    let temp = this.first;
    let min = this.first.value;
    while (temp.next) {
      if (temp.next.value < min) min = temp.next.value;
      temp = temp.next;
    }
    return min
  }
}

const myStack = new Stack(-1);
// myStack.push(2);
// myStack.push(0);
console.log('\n\n[+]: myStack', myStack);
console.log(myStack.minStack())
// myStack.pop();