// Largest element in array 

// 1 loop
// itrate array and compare each element
function largestElement1(arr) {

  // time complexity O(n)
  // space complexity
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    max < arr[i] ? max = arr[i] : max = max;
  }
  return max;
}

// 2 recursion
// take three argument max, arr, index
// base case index === arr.length
function largestElement2(max = 0, arr, index = 0) {
  // time complexity o(n)
  // space complexity O(1)
  if (index == arr.length) return max;
  if (max < arr[index]) max = arr[index];
  return largestElement2(max, arr, index + 1);

}

// 3  two pointer
// take two pointers low and high
// low is starting index high is last index
function largestElement3(low, arr, high, max = 0) {
  // time complexity o(n)
  // space complexity O(1)
  if (low > high) return max;
  if (max <= arr[low]) max = arr[low];
  if (max <= arr[high]) max = arr[high];
  return largestElement3(low + 1, arr, high - 1, max);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 7, 76, 76, 66, 6, 6, 6121];
// console.log(largestElement1(arr));
// console.log(largestElement2(0, arr, 0));
console.log(largestElement3(0, arr, arr.length - 1));