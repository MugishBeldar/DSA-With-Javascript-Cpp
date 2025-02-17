// 876. Middle of the Linked List

// broute approach 
// tc = O(n)
// sc = O(1)
function size(head) {
  let temp = head;
  let size = 1;
  if (!temp.next) {
    return size;
  }
  while (temp.next) {
    size++;
    temp = temp.next;
  }
  return size;
}

function get(index, head) {
  let temp = head;
  let count = 1;
  while (temp.next) {
    if (index === count) {
      return temp;
    }
    count += 1;
    temp = temp.next;
  }
  return temp;
}

var middleNode = function (head) {
  let length = size(head); // O(n)
  if (length == 1) return head;
  let index = Math.trunc(length / 2) + 1;
  let middleElm = get(index, head); // O(n)
  return middleElm;
};

// optimal approach 
// tortois and har algorithm or Floyd’s Cycle Detection Algorithm
// tc = O(n/2)
// sc = O(1);


var middleNode = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer;
};