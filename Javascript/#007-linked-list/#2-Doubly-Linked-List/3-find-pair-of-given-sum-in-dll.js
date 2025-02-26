// Given a sorted doubly linked list of positive distinct elements, the task is to find pairs in a doubly-linked list whose sum is equal to given value target.

const { convertArrToDLL, printDl } = require("../../util");

// Example 1:

// Input:  
// 1 <-> 2 <-> 4 <-> 5 <-> 6 <-> 8 <-> 9
// target = 7
// Output: (1, 6), (2,5)
// Explanation: We can see that there are two pairs 
// (1, 6) and (2,5) with sum 7.

// Example 2:

// Input: 
// 1 <-> 5 <-> 6
// target = 6
// Output: (1,5)
// Explanation: We can see that there is one pairs  (1, 5) with sum 6.

let arr = [1, 2, 4, 5, 6, 8, 9];
let head = convertArrToDLL(arr);
printDl(head);

// broute force 
// tc = O(n^2)
// sc = O(1)
// used two loop a, b
// take a's value and sum it for all possible b's value
// if sum = target then make pair of a's value and b's value

function findPair(head, target) {
  let temp1 = head;
  let pair = "";
  while (temp1) {
    let val1 = temp1.value;
    let temp2 = temp1.next;
    while (temp2) {
      let val2 = temp2.value;
      if (Number(val1) + Number(val2) === +target) {
        if (pair.length) {
          pair += `,(${val1},${val2})`;
        } else {
          pair += `(${val1},${val2})`;
        }
      }
      temp2 = temp2.next;
    }
    temp1 = temp1.next;
  }
  return pair;
}

// console.log(findPair(head, 7))

// optimal solution
// tc = O(n)
// sc = O(1)
// initialize two pointer left and right;
// sum of left pointer's value and right pointer's value untill left !== right and right.next !==left meand cross each other
// if sum == target then give left.next node to the left and give right.prev node to the right and make a pair and keep it in a variable 
// if sum >  target then dont move left pointer and give right.prev node to the right
// if sum < target then give left.next node to the left and don't move right pointer
function findPairOptimized(head, target) {
  if (!head || !head.next) return "";

  let left = head;
  let right = head;

  // Move right to the last node
  while (right.next) {
    right = right.next;
  }
  let pairs = "";

  while (left !== right && right.next !== left) {
    let sum = left.value + right.value;
    if (sum === target) {
      if (pairs.length) {
        pairs += `,(${left.value},${right.value})`;
      } else {
        pairs += `(${left.value},${right.value})`;
      }
      left = left.next; // Move left forward
      right = right.prev; // Move right backward
    } else if (sum < target) {
      left = left.next; // Need a larger sum, move left forward
    } else {
      right = right.prev; // Need a smaller sum, move right backward
    }
  }

  return pairs;
}

printDl(head);
console.log(findPairOptimized(head, 7));
