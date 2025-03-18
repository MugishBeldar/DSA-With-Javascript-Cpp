// 225. Implement Stack using Queues

// YOU CAN ALSO DO THIS PROBLEM USING TOW QUEUE MEANS USING TWO ARRAY 

// Understanding the Concept
// In a stack, the Last-In-First-Out (LIFO) property is followed, meaning the last inserted element should be removed first.

// However, a queue follows the First-In-First-Out (FIFO) order, meaning elements are removed in the order they were added.

// To simulate a stack using a queue, we:

// Push an element normally.
// Rotate the queue after each push so that the last inserted element comes to the front.


class StackUsingQueue {
  constructor() {
    this.queue = []; // Single queue
  }

  push(x) {
    let size = this.queue.length;
    this.queue.push(x);

    // Rotate the queue to make the last element come to the front
    while (size > 0) {
      this.queue.push(this.queue.shift());
      size--;
    }
  }

  pop() {
    if (this.queue.length === 0) return "Stack is empty";
    return this.queue.shift();
  }

  top() {
    if (this.queue.length === 0) return "Stack is empty";
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}


const stack = new StackUsingQueue();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30
console.log(stack.top()); // 20

// Final Observations
// Operation	Queue State
// push(10)	[10]
// push(20)	[20, 10]
// push(30)	[30, 20, 10]
// pop() → 30	[20, 10]
// top() → 20	[20, 10]aaa