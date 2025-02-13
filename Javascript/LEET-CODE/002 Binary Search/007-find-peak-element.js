// 162. Find Peak Element

// broute approach
// tc = n-2=n
// sc = 1
var findPeakElement = function (nums) {
  let peakElmInd = 0;
  if (nums[0] > nums[1]) {
    peakElmInd = 0;
  }
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      peakElmInd = i;
    }
  }
  if (nums[nums.length - 1] > nums[nums.length - 2]) {
    peakElmInd = nums.length - 1;
  }
  return peakElmInd;
};

// optimal approach 
// tc = logn
// sc = 1
/**
 * @param {number[]} arr
 * @return {number}
 */
var findPeakElement = function (arr) {
  let n = arr.length; // Size of the array
  // Edge cases:
  if (n === 1) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  let low = 1, high = n - 2;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      // If arr[mid] is the peak:
      if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1])
          return mid;

      // If we are in the left:
      if (arr[mid] > arr[mid - 1]) low = mid + 1;

      // If we are in the right:
      // Or, arr[mid] is a common point:
      else high = mid - 1;
  }
  // Dummy return statement
  return -1;
};