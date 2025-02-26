// 35. Search Insert Position


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// time complexity = O(ologn+on) = on
// sc = o1
var binarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (nums[mid] > target) {
          high = mid - 1
      }
      else if (nums[mid] < target) {
          low = mid + 1;
      }
      else {
          return mid;
      }
  }
  return -1;
}
var searchInsert = function (nums, target) {
  let index = binarySearch(nums, target); 
  if(index!==-1) {
     return index;
 } 
 if(index === -1) {
     for(let e of nums) {
         if(e>target) {
             return binarySearch(nums,e);
         } 
     }
     return nums.length
 }
};