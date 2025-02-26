// 540. Single Element in a Sorted Array
// we can also do using xor
// broute approach hashing 
// tc = on
// sc = on
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate1 = function (nums) {
  let frequencyCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (frequencyCount[nums[i]]) {
      frequencyCount[nums[i]] += 1
    } else {
      frequencyCount[nums[i]] = 1;
    }
  }
  for (let key in frequencyCount) {
    if (frequencyCount[key] === 1) {
      return +key
    }
  }
  return -1;
};

// optimal approach binary search
// tc = logn
// sc = o1
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate2 = function (nums) {

  let n = nums.length;
  if (n === 1) return nums[0];
  if (nums[0] !== nums[1]) return nums[0];
  if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

  let low = 1, high = n - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }

    // Check if mid is part of a valid pair
    if ((mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 === 1 && nums[mid] === nums[mid - 1])) {
      low = mid + 1; // Move right
    } else {
      high = mid - 1; // Move left
    }
  }
  return -1; // This case should never be reached if input is valid
};