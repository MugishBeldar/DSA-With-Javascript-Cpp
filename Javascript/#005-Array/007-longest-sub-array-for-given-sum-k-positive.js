// broute force approach
// TC = O(n^2)
// SC = O(1)
function longestSubArray(array, k) {
  let length = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum = sum + array[j];
      if (sum == k) {
        length = Math.max(length, j - i + 1);
      }
    }
  }
  return length;
}

console.log(longestSubArray([2, 3, 5, 1, 9], 10));