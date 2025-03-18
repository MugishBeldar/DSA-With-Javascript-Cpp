// implementation of stack using array
// time complexity O(1)
// space complexity O(size)
class Stack {
  constructor(size) {
    if (typeof size !== "number" || size <= 0) {
      throw new Error("Size must be a positive number");
    }
    this.top = -1;
    this.stack = new Array(size);
    this.maxSize = size;
  }

  // Push an element onto the stack
  // time complexity O(1)
  push(val) {
    if (val === undefined || val === null) {
      throw new Error("Value must be defined");
    }
    if (this.top >= this.maxSize - 1) {
      throw new Error("Stack overflow");
    }
    this.stack[++this.top] = val;
  }

  // Pop an element from the stack
  // time complexity O(1)
  pop() {
    if (this.top === -1) {
      throw new Error("Stack underflow");
    }
    const poppedValue = this.stack[this.top];
    delete this.stack[this.top]; // Optional: clear the reference
    // this.stack[this.top] = undefined; 
    this.top--;
    return poppedValue;
  }

  // Peek (Get the top element without removing it)
  // time complexity O(1)
  peek() {
    if (this.top === -1) {
      throw new Error("Stack is empty");
    }
    return this.stack[this.top];
  }

  // Check if stack is empty
  // time complexity O(1)
  isEmpty() {
    return this.top === -1;
  }
}

// Usage
const myStack = new Stack(3);
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log("Peek:", myStack.peek());
console.log("Popped:", myStack.pop());
console.log("Is Empty:", myStack.isEmpty());
console.log("Stack:", myStack);
