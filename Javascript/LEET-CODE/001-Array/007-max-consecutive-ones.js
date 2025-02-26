// 485. Max Consecutive Ones

/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [1, 0, 1, 1, 0, 1, 1, 1, 1];


// time complexity o(n);
var findMaxConsecutiveOnes = function (nums) {
  let maxOne = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      if (maxOne < count) {
        maxOne = count
      }
      count = 0;
    }
  }
  if (maxOne < count) {
    maxOne = count
  }
  return maxOne;
};

console.log(findMaxConsecutiveOnes(nums));