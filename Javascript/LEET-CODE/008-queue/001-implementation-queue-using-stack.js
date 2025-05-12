// 232. Implement Queue using Stacks

// YOU CAN ALSO DO THIS PROBLEM USING TWO STACK AND TWO ARRAY

class QueueUsingOneStack {
  constructor() {
    this.stack = []; // Single stack for all operations
  }

  // Enqueue operation (push into stack)
  enqueue(x) {
    this.stack.push(x);
  }

  // Dequeue operation (recursive approach)
  dequeue() {
    if (this.stack.length === 0) {
      return "Queue is empty";
    }

    // Pop the top element
    let top = this.stack.pop();

    // If stack is empty after popping, return the popped element
    if (this.stack.length === 0) {
      return top;
    }

    // Recursively call dequeue to get the first inserted element
    let dequeuedElement = this.dequeue();

    // Push back the popped element to maintain order
    this.stack.push(top);

    return dequeuedElement;
  }

  // Peek the front element (without removing it)
  front() {
    if (this.stack.length === 0) {
      return "Queue is empty";
    }

    let top = this.stack.pop();
    if (this.stack.length === 0) {
      this.stack.push(top);
      return top;
    }

    let frontElement = this.front();
    this.stack.push(top);
    return frontElement;
  }

  // Check if queue is empty
  isEmpty() {
    return this.stack.length === 0;
  }
}

// Usage
const queue = new QueueUsingOneStack();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.front());   // 20
console.log(queue.isEmpty()); // false
console.log(queue.dequeue()); // 20
console.log(queue.dequeue()); // 30
console.log(queue.dequeue()); // "Queue is empty"
