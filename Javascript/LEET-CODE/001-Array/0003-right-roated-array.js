// 189. Rotate Array --> right k element goes end of the array 

// broute force approach
var rotate1 = function (nums, k) {
  k = k % nums.length;
  let temp = [];
  let i = 0;
  while (i != k) {
    temp.push(nums[i]);
    i++;
  }
  console.log(temp);
  for (let i = k; i < nums.length; i++) {
    nums[i - k] = nums[i];
  }
  for (let i = nums.length - k; i < nums.length; i++) {
    nums[i] = temp[i - (nums.length - k)]
  }
  return nums;
}
console.log(rotate1([1, 2, 3, 4], 1));


// optimal approach
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  // console.log(k)
  reverse(nums, 0, nums.length - 1); // O(n)
  // console.log(nums)
  reverse(nums, 0, k - 1); //O(d)
  // console.log(nums)
  reverse(nums, k, nums.length - 1); // O(n-d)
  return nums;
};

function reverse(nums, start, end) {
  while (start <= end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// time complexity O(n)
// space complexity O(1)
// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums); // Output: [4, 5, 6, 7, 1, 2, 3]