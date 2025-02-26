// 2. Add Two Numbers

// broute force approach but not work; 
var addTwoNumbers = function (l1, l2) {
  let arrl1 = [];
  let arrl2 = [];
  let templ1 = l1;
  while (templ1) {
    arrl1.push(templ1.val);
    templ1 = templ1.next;
  }
  let templ2 = l2;
  while (templ2) {
    arrl2.push(templ2.val);
    templ2 = templ2.next;
  }
  let num1 = parseInt(arrl1.join(''), 10);
  let num2 = parseInt(arrl2.join(''), 10);
  let sum = num1 + num2;
  let newArr = sum.toString().split('').reverse();
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let i = 0; i < newArr.length; i++) {
    current.next = new ListNode(parseInt(newArr[i], 10));
    current = current.next;
  }
  return dummyHead.next;
};


// optimal approach 
// time complexity = O(n+m)

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  console.log(current)
  let carry = 0;

  while (l1 || l2) {
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    console.log('val', x)
    console.log('val', y)

    let sum = x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
}