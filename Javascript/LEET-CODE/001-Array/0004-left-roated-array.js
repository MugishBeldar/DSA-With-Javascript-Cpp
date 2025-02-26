/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotateLeft = function(nums, k) {
  k = k % nums.length; // Handle cases where k is larger than the array length

  // Reverse the entire array
  reverse(nums, 0, nums.length - 1);

  // Reverse the first k elements
  reverse(nums, nums.length-1 , k - 1);

  // Reverse the last n - k elements
  reverse(nums, k, nums.length - 1);

  return nums;
};

function reverse(nums, start, end) {
  while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
  }
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
rotateLeft(nums, 3);
console.log(nums); // Output: [4, 5, 6, 7, 1, 2, 3]
