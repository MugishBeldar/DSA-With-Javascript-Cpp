/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if(nums.length <=2) return nums.length;

  let prev1 = nums[0];
  let prev2 = nums[1];
  let pivot = 2;
  for(let i=2; i<nums.length; i++) {
    let current = nums[i];
    if(current !== prev1 || current !== prev2) {
      nums[pivot] = current;
      pivot+=1;
    }
    prev1 = prev2;
    prev2 = current;
  }
  return pivot;
};
console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
// time complexity:---> O(n);

// Example 1:

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
