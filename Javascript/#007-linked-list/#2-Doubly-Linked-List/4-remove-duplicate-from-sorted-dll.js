// Remove duplicates from a sorted doubly linked list
// Given a doubly linked list of n nodes sorted by values, the task is to remove duplicate nodes present in the linked list.

const { convertArrToDLL, printDl } = require("../../util");

// Example 1:

// Input:
// n = 6
// 1<->1<->1<->2<->3<->4
// Output:
// 1<->2<->3<->4
// Explanation:
// Only the first occurance of node with value 1 is 
// retained, rest nodes with value = 1 are deleted.
// Example 2:

// Input:
// n = 7
// 1<->2<->2<->3<->3<->4<->4
// Output:
// 1<->2<->3<->4
// Explanation:
// Only the first occurance of nodes with values 2,3 and 4 are 
// retained, rest repeating nodes are deleted.

let arr = [1, 1, 1, 2, 3, 4];;
let head = convertArrToDLL(arr);
printDl(head);

// broute force 
// get value of dll and keep in to set
// change the value of the dll 
// tc = O(n)
// sc = O(n)

function removeDuplicate(head) {
  let set = new Set();
  let temp = head;
  while (temp) {
    set.add(temp.value);
    temp = temp.next;
  }
  temp = head;
  for (let val of set) {
    console.log('val:--', val);
    temp.value = val;
    temp = temp.next;
  }
  temp.prev.next = null;
  return head;
}

// printDl(removeDuplicate(head));

// optimal solution 
// two pointer i and j also take take one temp to remember ith node for removing
// if i and j values are same then remove assign i th to temp and remove ith and give jth prev  = temp prev;
// keep going until jth.next!==null

function removeDuplicateOptimal(head) {
  if (!head || !head.next) return head; // If list is empty or has only one node

  let current = head;

  while (current && current.next) {
    if (current.value === current.next.value) {
      let duplicate = current.next;
      current.next = duplicate.next; // Remove duplicate

      if (duplicate.next) { // it is can be null
        duplicate.next.prev = current; // Adjust previous link
      }
    } else {
      current = current.next; // Move forward only if no deletion happens
    }
  }

  return head;
}

printDl(removeDuplicateOptimal(head));

