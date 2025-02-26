// 141. Linked List Cycle

// broute force approahch
// traverse the ll
// map each node unique way 
// if node found in map than return node 
// if reach at the end of ll
// return null
// Time Complexity: O(N)
// Space Complexity: O(N)
function detectCycle(head) {
  let temp = head;
  const nodeMap = new Map();
  while (temp !== null) {
    if (nodeMap.has(temp)) {
      return temp;
    }
    nodeMap.set(temp, true);
    temp = temp.next;
  }
  return null;
}

// optimal har and tortois algorithm;
// Time Complexity: O(N)
// Space Complexity: O(1)
var hasCycle = function (head) {
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer == fastPointer) {
      return true;
    }
  }
  return false;
};
