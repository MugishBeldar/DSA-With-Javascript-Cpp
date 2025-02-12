// broute approach
// tc = logn
// sc = o1

/**
 * @param {number[]} nums
 * @return {number}
 */
var roatateCount1 = function (nums) {
  let mapMinIndex = {};
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (min > nums[i]) {
      min = nums[i]
      mapMinIndex[min] = i;
    }
  }
  return mapMinIndex[min];

}
// console.log(roatateCount1([4, 5, 6, 7, 0, 1, 2, 3]));

// optimal approach binary search and hashing 
// tc = logn
// sc = o1
var roatateCount2 = function (nums) {
  let mapMinIndex = {};
  let low = 0, high = nums.length - 1;
  let ans = Infinity;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[low] <= nums[mid]) {
      ans = Math.min(ans, nums[low]);
      mapMinIndex[nums[low]] = low;
      low = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      mapMinIndex[nums[mid]] = mid;
      high = mid - 1;
    }
  }
  return mapMinIndex[ans];
}
console.log(roatateCount2([4, 5, 6, 7, 0, 1, 2, 3]));