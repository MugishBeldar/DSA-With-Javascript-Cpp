// broute force approach

function removeNthFromEnd(head, N) {
  if (head === null) {
    return null;
  }
  let cnt = 0;
  let temp = head;

  while (temp !== null) {
    cnt++;
    temp = temp.next;
  }

  if (cnt === N) {
    let newhead = head.next;
    head = null;
    return newhead;
  }

  let res = cnt - N;
  temp = head;

  while (temp !== null) {
    res--;
    if (res === 0) {
      break;
    }
    temp = temp.next;
  }

  let delNode = temp.next;
  temp.next = temp.next.next;
  delNode = null;
  return head;
}

// broute force approach
function size(head) {
  if (!head) return 0;
  if (head && !head.next) return 1;
  let length = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    length++;
  }
  return length;
}
var removeNthFromEnd = function (head, n) {
  let length = size(head);
  if (length == n) {
    let newhead = head.next;
    head = null;
    return newhead;
  }
  let changeInd = length - n;
  let tempInd = 1;
  let temp = head;
  while (temp) {
    if (tempInd == changeInd) {
      if (!temp.next) {
        temp.next = null
      } else {
        temp.next = temp.next.next;
      }
    }
    temp = temp.next;
    tempInd++;
  }
  return head;
};

// optimal approach

var removeNthFromEnd = function (head, n) {
  let fast = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  if (fast === null) return head.next;
  slow.next = slow.next.next;
  return head;
};