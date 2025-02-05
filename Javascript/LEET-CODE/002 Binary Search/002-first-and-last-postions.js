// 34 first and last position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function lowerBound(nums, target) {
      let low = 0, high = nums.length - 1, first = -1;
      while (low <= high) {
          let mid = Math.floor((low + high) / 2);
          if (nums[mid] >= target) { // lower boudnd logic
              if (nums[mid] === target) first = mid; // this is for problem
              high = mid - 1; // Move left
          } else {
              low = mid + 1;
          }
      }
      return first;
  }

  function upperBound(nums, target) {
      let low = 0, high = nums.length - 1, last = -1;
      while (low <= high) {
          let mid = Math.floor((low + high) / 2);
          if (nums[mid] <= target) { // upper bound 
              if (nums[mid] === target) last = mid; // this is for problem
              low = mid + 1; // Move right
          } else {
              high = mid - 1;
          }
      }
      return last;
  }

  return [lowerBound(nums, target), upperBound(nums, target)];
};
