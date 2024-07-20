class Node {
  constructor(value) {
    this.head = value;
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    if(value!==undefined) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  }

  push (value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length=1;
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
  }
  reverse () {

    // three pointer method 
    let temp = this.head; // 1st
    this.head = this.tail;
    this.tail = temp;

    let prev = null; // 2nd
    let next = temp; // 3rd
    // let counter = 0
    while(temp) {
      next = temp.next;
      temp.next = prev;
      prev = temp
      temp = next; 
      // console.log('LinkedList ~ reverse ~ temp:', temp)
      // counter++;
    }
    return this;
  }
}

const linkedList = new LinkedList(1);
linkedList.push(2);
console.log(linkedList.reverse());
console.log(linkedList);