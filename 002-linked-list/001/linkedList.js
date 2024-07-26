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

  // leet code problem palindrom linkedList
  isPalindrome() {
    // below is good but not optimized method 
    // let listLength = Math.ceil(this.size()/2);
    // console.log("list length:--->", listLength);
    // let counter = 0;
    // while(counter!==listLength) {
    //   let firstNode = this.getFirst();
    //   let lastNode = this.getLast();
    //   if(firstNode.head === lastNode.head) {
    //     this.shift();
    //     this.pop();
    //     counter++;
    //   } else {
    //     return false;
    //   }
    // }
    // return true;

    // for optimized method we have to use find middle point and compare first half and second half

    // here in slow we get second half linkedlist
    let slow = this.head, fast = this.head;
    while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // reverse second half linkedlist 
    let prev = null
    while(slow) { 
      let nextTemp = slow.next;
      slow.next = prev;
      prev = slow;
      slow = nextTemp;
    }

    // compare 
    let firstHalf = this.head , secondHalf = prev;
    while(secondHalf) {
      if(firstHalf.head!== secondHalf.head) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
    return true

  }

  // leet code problem sort list
  sort() {
    if (!this.head) return undefined;
    
    // using bubble sort
    // let swapped;
    // do {
    //   swapped = false;
    //   let current = this.head;
      
    //   while (current.next) {
    //     if (current.head > current.next.head) {
    //       // Swap values
    //       let temp = current.head;
    //       current.head = current.next.head;
    //       current.next.head = temp;
    //       swapped = true;
    //     }
    //     current = current.next;
    //   }
    // } while (swapped);
    

    // taking extra space 
    let temp = this.head;
    let arr = [];
    do {
      arr.push(temp.head);
      temp = temp.next;
    } while(temp);
    arr = arr.sort((a,b)=>a-b);
    console.log(arr)
    const sortedLinkList = new LinkedList(arr[0]);
    for(let i=1; i<arr.length; i++) {
      sortedLinkList.push(arr[i])
    }
    return sortedLinkList;
  }
}

// const linkedList = new LinkedList(1);
// linkedList.push(2)
// linkedList.push(4)
// console.log(linkedList);
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
// linkedList.clear();
// console.log(linkedList);
// console.log(JSON.stringify(linkedList));


// for palindrom linkedList
// const linkListOne = new LinkedList(1);
// linkListOne.push(2)
// linkListOne.push(1)
// console.log(JSON.stringify(linkListOne));
// console.log(linkListOne.isPalindrome());

// for sort linkedlist
const linkedListTwo = new LinkedList(1);
linkedListTwo.push(3);
linkedListTwo.push(2);
linkedListTwo.push(3);
linkedListTwo.push(1);
linkedListTwo.push(0);
console.log(JSON.stringify(linkedListTwo));
console.log(JSON.stringify(linkedListTwo.sort()));


