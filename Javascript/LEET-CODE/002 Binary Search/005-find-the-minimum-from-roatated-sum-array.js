// 153. Find Minimum in Rotated Sorted Array

// first approach 
// tc on
// sc o1
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin1 = function (nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i]
    }
  }
  return min;
};

// optimal approach binary search
// tc = logn binary search 
// sc = o1
function findMin2(nums) {
  let low = 0, high = nums.length - 1;
  let ans = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[low] <= arr[mid]) {
      ans = Math.min(ans, nums[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, arr[mid]);
      high = mid - 1;
    }
  }
  return ans;
}