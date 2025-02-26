// 148. Sort List

// broute force 
// tc : O(nlogn);
// sc : O(1)
var sortList = function(head) {
  if(!head) return head;
  let temp = head;
  let arr = [];
  do {
      arr.push(temp.val);
      temp = temp.next
  } while (temp)
  arr = arr.sort((a,b)=>a-b);
  temp = head;
  let ind = 0;
  while(temp) {
      temp.val = arr[ind];
      temp = temp.next;
      ind++;
  }
  return head;
};