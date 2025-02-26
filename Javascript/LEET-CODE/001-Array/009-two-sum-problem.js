// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let twoSumArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        twoSumArr[0] = i;
        twoSumArr[1] = j;
        return twoSumArr;
      }
    }
  }
  return twoSumArr;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
      let remainingNums = target - nums[i];
      if (map.hasOwnProperty(remainingNums)) { 
          return [map[remainingNums], i]; 
      }
      map[nums[i]] = i;
  }
  return [];
};
 