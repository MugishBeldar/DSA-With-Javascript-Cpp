const { convertArrToDLL, printDl } = require("../../util");

let arr = [0, 1, 2, 3, 4, 5];
const head = convertArrToDLL(arr);
printDl(head);

// broute force 
// we map all value to the hash map
// then traverse tha dll nad assigned popped value to the dll node
// tc = on + on = on
// sc = on
function reverse(head) {
  let map = [];
  let temp = head;
  while (temp) {
    map.push(temp.value);
    temp = temp.next;
  }
  temp = head;
  while (temp) {
    temp.value = arr.pop();
    temp = temp.next;
  }
  return head;
}

const rev = reverse(head);
printDl(rev);