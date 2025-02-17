// blroute force 
// tc = O(n) + O(n) = 2O(n) = O(n)
// sc = O(n) 

var reverseList = function (head) {
  let values = [];
  let temp = head;
  while (temp) {
    values.push(temp.val);
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    temp.val = values.pop();
    temp = temp.next;
  }

  return head;
};

// optimal approach three pointer
function reverseLinkedList(head) {
  let nextNode = null;
  let current = head;
  let prev = null;
  while (current) {
    nextNode = current.next;
    current = prev;
    prev = current;;
    current = nextNode;
  }
  return head;
}


// other optimal approach tuf 
// Function to reverse a linked list
// using the 3-pointer approach
function reverseLinkedList(head) {
    
  // Initialize pointer 'temp' at
  // head of the linked list
  let temp = head;  
  
  // Initialize a pointer 'prev' to null
  // representing the previous node
  // (initially none)
  let prev = null;  

  // Traversing the list, continue until
  // 'temp' reaches the end (null)
  while (temp !== null) {  
      // Store the next node in
      // 'front' to preserve the reference
      let front = temp.next;  
      
      // Reverse direction of current node's
      // 'next' pointer to point to 'prev'
      temp.next = prev;  
      
      // Move 'prev' to the current node,
      // preparing it for the next iteration
      prev = temp;
      
      // Move 'temp' to the 'front' node
      // (the next node), advancing traversal
      temp = front;  
  }

  // Return the new head of
  // the reversed linked list
  return prev;  
}