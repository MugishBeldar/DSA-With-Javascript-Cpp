// 2149. Rearrange Array Elements by Sign

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var rearrangeArray = function(nums) {
  let pos = [];
  let neg = [];
  let result = [];
  for(let i=0; i<nums.length; i++) {
      if(nums[i]>0) {
          pos.push(nums[i]);
      } else {
          neg.push(nums[i]);
      }
  }

  for (let i=0; i<nums.length/2; i++) {
      result[2*i] = pos[i];
      result[2*i+1] = neg[i];
  }

  return result;
};