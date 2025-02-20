// You are given the head_ref of a doubly Linked List and a Key. Your task is to delete all occurrences of the given key if it is present and return the new DLL.

// Input: 
// 2<->2<->10<->8<->4<->2<->5<->2
// 2
// Output: 
// 10<->8<->4<->5
// Explanation: 
// All Occurences of 2 have been deleted.

// Input: 
// 9<->1<->3<->4<->5<->1<->8<->4
// 9
// Output: 
// 1<->3<->4<->5<->1<->8<->4
// Explanation: 
// All Occurences of 9 have been deleted.

const { convertArrToDLL, printDl } = require("../../util");

let arr = [2, 2, 10, 8, 4, 2, 5, 2];
let arr1 = [9, 1, 3, 4, 5, 1, 8, 4];
const head = convertArrToDLL(arr);
printDl(head);

// broute force 
// hash all value in stack and change the value of a dll 
// tc = o(n)
// sc = O(n)
function removeNodeOfGivenKey(head, key) {
  let arr = [];
  let temp = head;
  while (temp) {
    if (temp.value !== key) {
      arr.push(temp.value);
    }
    temp = temp.next;
  }
  console.log('dll values : ', arr);
  temp = head;
  let ind = 0;
  while (ind < arr.length) {
    temp.value = arr[ind];
    if (ind == arr.length - 1) {
      temp.next = null;
    } else {
      temp = temp.next;
    }
    ind++;
  }
  return head;
}

// printDl(removeNodeOfGivenKey(head, 9))

// optimal approach
// traverse the dll if node value is match than remove node from dll means change it next and prev links
function removeNodeOfGivenKey1(head, key) {
  let temp = head;
  //2<->10<->8<->4<->2<->5<->2
  while (temp) {
    if (temp.value == key) {
      if (temp.prev) {
        temp.prev.next = temp.next;
      } else {
        head = temp.next;
      }
      if (temp.next) {
        temp.next.prev = temp.prev;
      }
    }
    temp = temp.next;
  }
  return head;
}
console.log('ans:--')
printDl(removeNodeOfGivenKey1(head, 2))