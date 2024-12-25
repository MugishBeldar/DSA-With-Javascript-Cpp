// 26. Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */

 // take first element index
 // loop for second elements comparision
 // if not same than increatent i and pase jth element that
 

 var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
          i++; 
          nums[i] = nums[j]; 
      }
  }
  return i + 1;
};




// using set
var removeDuplicates = function(nums) {
    
  let array = new Set();
  for (let i=0; i<nums.length; i++) {
      array.add(nums[i]);
  }
  let i = 0;
  for (const element of array) {
      nums[i] = element;
      i++;
  }
  return i;
};