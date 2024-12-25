// leetcode 1752. Check if Array Is Sorted and Rotated

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// slice array from its index and make new array
// check its sorted or not
// if yes then return true
// at the end return false

function isSorted(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= nums[i - 1]) {
      continue
    } else {
      return false;
    }
  }
  return true
}
var check = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let roatatedArray = [...nums.slice(i), ...nums.slice(0, i)]
    let isSortedArray = isSorted(roatatedArray);
    if (isSortedArray) {
      return true;
    }
  }
  return false;
};


const nums = [1,2,3]
console.log(check(nums));