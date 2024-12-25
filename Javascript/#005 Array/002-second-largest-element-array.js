// second largest digit

// 1 
// sort array and return 2nd last element 
function secondLargest1(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
  // timecomplexit O(nlogn)
  // space complexity O(1)
}

// 2  loop
// itrate array and compare each element
function secondLargest2(arr) {
  let max = 0;
  let secondMax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      secondMax = max;
      max = arr[i];
    }
  }
  return secondMax;
  // time complexity O(n)
  // space complexity O(1)
}

const arr = [1, 2, 2, 2, 423, 1, 422];
console.log(secondLargest1(arr));
console.log(secondLargest2(arr));