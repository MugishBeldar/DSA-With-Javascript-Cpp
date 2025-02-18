
// broute force 
// easy use two loops
// tc : O(n2)
// sc : O(1)
var getIntersectionNode = function (headA, headB) {
  let tempA = headA;
  while (tempA) {
    let tempB = headB;
    while (tempB) {
      if (tempA == tempB) {
        return tempA;
      }
      tempB = tempB.next;
    }
    tempA = tempA.next;
  }
};

// optimal 
// using hash map 
// time complexity : O(N + M)
// space complexity : o(n) // storing list one value in side a hash map

var getIntersectionNode = function (headA, headB) {
  let hashMap = new Map();
  let head1 = headA;
  while (head1) {
    hashMap.set(head1, head1);
    head1 = head1.next;
  }
  let head2 = headB;
  while (head2) {
    if (hashMap.has(head2)) {
      return head2;
    }
    head2 = head2.next;
  }
}