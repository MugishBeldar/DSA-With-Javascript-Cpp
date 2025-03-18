class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Push an element onto the stack
  // Time Complexity: O(1) - Constant time operation
  push(x) {
    const node = new StackNode(x);
    node.next = this.top;
    this.top = node;
    console.log("Element pushed");
    this.size++;
  }

  // Pop an element from the stack
  // Time Complexity: O(1) - Removing the top element is a constant time operation
  pop() {
    if (this.top === null) return -1;
    const topValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return topValue;
  }

  // Get the size of the stack
  // Time Complexity: O(1) - Directly accessing the size property
  getSize() {
    return this.size;
  }

  // Check if the stack is empty
  // Time Complexity: O(1) - Checking if the top is null
  isEmpty() {
    return this.top === null;
  }

  // Print the stack
  // Time Complexity: O(n) - Iterates through all elements in the stack
  print() {
    let current = this.top;
    let result = "";
    while (current !== null) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Example usage
const s = new Stack();
s.push(10);
s.push(20);
s.print();
console.log("Element popped", s.pop());
console.log("Stack size:", s.getSize());
console.log("Stack is empty or not:", s.isEmpty());
