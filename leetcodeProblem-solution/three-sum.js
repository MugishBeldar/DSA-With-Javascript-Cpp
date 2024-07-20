/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var searchPair = function(triplets, target, leftPointer, nums) {

  let rightPointer = nums.length-1;

  while(leftPointer<rightPointer) {

      const currentSum = nums[leftPointer] + nums[rightPointer];

      if(target === currentSum) {
          triplets.push([-target, nums[leftPointer], nums[rightPointer]]);
          leftPointer++;
          rightPointer--;

          while(nums[leftPointer-1] === nums[leftPointer] && leftPointer < rightPointer) {
              leftPointer++;
          }

          while(nums[rightPointer+1] === nums[rightPointer] && leftPointer < rightPointer) {
              rightPointer++;
          }

      } else if (target < currentSum) {
          rightPointer--;
          
      } else if (target > currentSum) {
          leftPointer++;
      }
  }
}

var threeSum = function(nums) {

const sortedArray = nums.sort((a,b)=>a-b) // acending order;
const triplets =  [];

for(let i=0; i<nums.length; i++) {
  let target = -nums[i];

  if(i>0 && nums[i]===nums[i-1]) {
      continue;
  }
  const leftPointer = i+1;
  searchPair(triplets, target, leftPointer, nums);
}
return triplets;

};