// broute force 
// Time Complexity: O(2^n * n)
// Since each element has two choices (include/exclude), there are 2^n subsets, 
// and copying subsets takes O(n), leading to O(2^n * n).
var subsets = function (nums) {
  let subSets = [[]];

  for (let i = 0; i < nums.length; i++) {
    let newSubsets = [];
    for (let subset of subSets) {
      newSubsets.push([...subset, nums[i]]);
    }
    subSets.push(...newSubsets);
  }

  return subSets;
};