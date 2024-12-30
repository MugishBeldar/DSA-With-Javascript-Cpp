// 53. Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    max = Math.max(max, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

// se can also use 2 loops for broute force approach 

// return subArray too
var maxSubArray1 = function (nums) {
  let max = -Infinity
  let sum = 0;
  let startInd = 0;
  let endInd;
  for (let i = 0; i < nums.length; i++) {
    if (sum == 0) startInd = i;
    sum = sum + nums[i];
    if (max < sum) {
      max = sum;
      endInd = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return nums.slice(startInd, endInd + 1);
};
console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));