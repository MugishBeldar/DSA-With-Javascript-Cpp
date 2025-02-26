// 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// optimal approach two pointer
var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }

  }
  return nums;

  // time complexity O(n-1) = O(n)
  // space complexity O(1) in place

  // broute force
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j<nums.length; j++) {
  //         if (nums[i] == 0 && nums[j] !== 0) {
  //             let temp = nums[i];
  //             nums[i] = nums[j];
  //             nums[j] = temp;
  //             i++;
  //         }
  //     }
  // }
  // time complexity O(n * (n-i)) = O(n^2)
  // space complexity O(1) in place
  return nums;
};