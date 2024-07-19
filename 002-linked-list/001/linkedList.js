class Node {
  constructor(value) {
    this.head = value;
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    if (value !== undefined) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }

  getFirst() {
    if (!this.head) {
      return undefined;
    }
    return this.head
  }

  getLast() {
    if (!this.head) {
      return undefined
    };
    let temp = this.head;
    let prev = this.head;
    while(temp.next) {
      prev = temp;
      temp = prev.next
    }
    return temp;
  }

  get(index) {
    if(!this.head) return undefined;
    let temp = this.head;
    let count = 0;
    while(index!==count) {
      let prev = temp;
      temp = prev.next
      count++;
    }
    return temp;
  }

  set(index, value) {
    if(!this.head) return undefined;
    let temp = this.get(index);
    if(temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if(index===0) { // insert node at 0th location 
      this.unShift(value)
    }

    if(index === this.length) {
      this.push(value)
    }

    const newNode = new Node(value);
    // Uses the get method to find the node right before the desired position (index - 1).
    const temp = this.get(index-1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  size() {
    if(!this.head) return 0;
    let counter = 1;
    let node = this.head;
    while(node.next) {
      node=node.next;
      counter++;
    }
    return counter;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length=0;
  }
}

const linkedList = new LinkedList(1);
// linkedList.push(2)
// linkedList.push(4)
console.log(linkedList);
// console.log('popped node:--->', linkedList.pop());
// linkedList.unShift(3);
// console.log('unshift:--->', linkedList);
// console.log('shift:--->', linkedList.shift());
// console.log('getfirst:--->', linkedList.getFirst());
// console.log('getlast:--->', linkedList.getLast());
// console.log('get:--->', linkedList.get(2));
// console.log('set:--->', linkedList.set(2, 10));
// console.log('insert node at desire location:--->', linkedList.insert(2, 3));
// console.log('size:--->', linkedList.size());
linkedList.clear();
console.log(linkedList);
console.log(JSON.stringify(linkedList));
