class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  // Enqueue (Push) - O(1)
  enqueue(val) {
    if (val === undefined || val === null) {
      throw new Error("Value must be defined");
    }
    let queueNode = new QueueNode(val);
    if (this.start === null) {
      this.start = queueNode;
      this.end = queueNode;
    } else {
      this.end.next = queueNode;
      this.end = queueNode;
    }
    this.size++;
  }

  // Dequeue (Pop) - O(1)
  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue underflow");
    }
    const poppedValue = this.start.value;
    this.start = this.start.next;
    if (this.start === null) {
      this.end = null;
    }
    this.size--;
    return poppedValue;
  }

  // Peek - O(1)
  peek() {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }
    return this.start.value;
  }

  // Check if queue is empty - O(1)
  isEmpty() {
    return this.size === 0;
  }

  // Get size - O(1)
  getSize() {
    return this.size;
  }

  // Print queue - O(n)
  print() {
    let current = this.start;
    let result = "";
    while (current !== null) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Example usage
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.print(); // Output: 10 20 30
console.log("Dequeued:", q.dequeue()); // Output: 10
console.log("Front element:", q.peek()); // Output: 20
console.log("Queue size:", q.getSize()); // Output: 2
console.log("Queue is empty:", q.isEmpty()); // Output: false
