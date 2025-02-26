// 328. Odd Even Linked List
// broute force 
// first map odd index value
// second map even index value
// change ll value 
// return head;
// time complexity : O(n/2) + O(n/2) + O(n) = O(n);
// space complexity : O(n)
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let arr = [];
  let odd = head;
  while (odd) {
    arr.push(odd.val);
    if (odd.next && odd.next.next) {
      odd = odd.next.next;
    } else {
      odd = null
    }
  }
  let even = head.next;
  while (even) {
    arr.push(even.val);
    if (even.next && even.next.next) {
      even = even.next.next;
    } else {
      even = null;
    }
  }
  let temp = head;
  let ind = 0;
  while (temp) {
    temp.val = arr[ind];
    temp = temp.next;
    ind++;
  }
  return head;
};

// optimal solution
// tc = O(n/2)*2 = O(n)
// sc = O(1)
var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
  }
  odd.next = evenHead;
  return head;
};
