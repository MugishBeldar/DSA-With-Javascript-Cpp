class Queue {
  constructor(size) {
    if (typeof size !== "number" || size <= 0) {
      throw new Error("Size must be a positive number");
    }
    this.queue = new Array(size);
    this.currentSize = 0;
    this.start = -1;
    this.end = -1;
    this.maxSize = size;
  }

  // Push (Enqueue)
  // Time Complexity: O(1) - Direct array index assignment
  // Space Complexity: O(1) - No additional space used
  push(val) {
    if (val === undefined || val === null) {
      throw new Error("Value must be defined");
    }
    if (this.currentSize >= this.maxSize) {
      throw new Error("Queue overflow");
    }
    if (this.currentSize === 0) {
      this.start = 0;
      this.end = 0;
    } else {
      // Circular increment
      this.end = (this.end + 1) % this.maxSize; 
    }
    this.queue[this.end] = val;
    this.currentSize++;
  }

  // Pop (Dequeue)
  // Time Complexity: O(1) - Direct array index removal and incrementing start pointer
  // Space Complexity: O(1) - No extra space, modifying the same array
  pop() {
    if (this.currentSize === 0) {
      throw new Error("Queue underflow");
    }
    const poppedValue = this.queue[this.start];
    delete this.queue[this.start]; 
    if (this.currentSize === 1) {
      this.start = -1;
      this.end = -1;
    } else {
      // Circular increment
      this.start = (this.start + 1) % this.maxSize; 
    }
    this.currentSize--;
    return poppedValue;
  }

  // Peek (Front element)
  // Time Complexity: O(1) - Direct access to the front element
  // Space Complexity: O(1) - No additional space used
  peek() {
    if (this.currentSize === 0) {
      throw new Error("Queue is empty");
    }
    return this.queue[this.start];
  }

  // Check if Queue is Empty
  // Time Complexity: O(1) - Single comparison
  // Space Complexity: O(1) - No additional space used
  isEmpty() {
    return this.currentSize === 0;
  }

  // Print the Queue
  // Time Complexity: O(n) - Iterates through all elements in the queue
  // Space Complexity: O(1) - Only prints data, no extra storage
  print() {
    console.log("Queue:", this.queue);
  }
}

// Usage
const myQueue = new Queue(3);
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.log("Peek:", myQueue.peek()); 
console.log("Popped:", myQueue.pop()); 
console.log("Is Empty:", myQueue.isEmpty()); 
myQueue.print(); 
