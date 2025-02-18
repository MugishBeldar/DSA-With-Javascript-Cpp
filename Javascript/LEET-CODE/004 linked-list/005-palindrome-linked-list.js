// 234. Palindrome Linked List

// broute force approach 
// map all linkedlist values
// join map in comp1;
// reverse map and join in comp2
// compare both

// tc : O(n) + O(n) + O(n) + O(n) = O(n)
// sc : O(n) // map linked list values 

var isPalindrome = function (head) {
  let map = []
  let temp = head;
  while (temp) {
    map.push(temp.val);
    temp = temp.next;
  }
  let comp1 = map.join('');
  let comp2 = map.reverse().join('');
  if (comp1 === comp2) {
    return true;
  }
  return false;
};

// optimal 
// find the mid point;
// reverse second half
// compare values
// rturn true or false 

// tc : O(n/2) + O(n/2) = O(n/2)
// sc : O(1)

var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  // Find the middle of the linked list using the slow and fast pointer technique
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let prev = null;
  while (slow) {
    let nextTemp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextTemp;
  }

  // Compare the first half and the reversed second half
  let firstHalf = head, secondHalf = prev;
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) return false;
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};