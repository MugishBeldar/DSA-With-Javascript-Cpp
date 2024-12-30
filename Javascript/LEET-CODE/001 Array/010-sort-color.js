// 75 sort color

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let count = { 0: 0, 1: 0, 2: 0 };
  for (let num of nums) {
      count[num]++;
  }
  
  let index = 0;
  for (let color = 0; color <= 2; color++) {
      for (let i = 0; i < count[color]; i++) {
          nums[index++] = color;
      }
  }
};

// dutch national algorithm

var sortonetwozero = function(nums) {
  let low = 0, mid = 0, high = nums.length-1;
  while (mid < high) {
    if(nums[mid]==0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]]
      low++;
      mid++;
    } else if(nums[mid]==1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--

    }
  }
}