/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let leftPointer = 0, current=0, rightPointer = nums.length-1;
    while(current<=rightPointer) {
      // console.log('\n\n\nsortColors ~ rightPointer:', rightPointer)
      // console.log('sortColors ~ current:', current)
      if(nums[current]==0) {
        // console.log('\n\n\nsortColors ~ nums[current]:', nums[current]);
        // console.log('sortColors ~ nums[leftPointer]:', nums[leftPointer]);
        [nums[leftPointer], nums[current]] = [nums[current], nums[leftPointer]]
        // console.log('\n\n\nsortColors ~ nums:', nums)
        leftPointer++;
        current++;
      }
      else if(nums[current] === 2) {
        // console.log('\n\n\nsortColors ~ nums[current]:', nums[current]);
        // console.log('sortColors ~ nums[rightPointer]:', nums[rightPointer]);
        [nums[rightPointer], nums[current]] = [nums[current], nums[rightPointer]];
        // console.log('\n\n\nsortColors ~ nums:', nums)
        rightPointer--;
      } 
      else {
        current++;
      }
    }
    return nums;
};

console.log(sortColors([1,2,0])) 

// time complexity : O(n)

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,]
// Output: [0,1,2]