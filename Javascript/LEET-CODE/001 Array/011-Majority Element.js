// 169. Majority Element

// tc : O(n)
// sc : O(n)
var majorityElement = function (nums) {
  let hashmap = {}
  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i]]) {
      hashmap[nums[i]] = hashmap[nums[i]] + 1;
    } else {
      hashmap[nums[i]] = 1;
    }
  }
  let nBy2 = Math.ceil(nums.length / 2)

  for (let key in hashmap) {
    if (hashmap[key] >= nBy2) {
      return +key;
    }
  }
};


// moore's voting algorithm
function majorityElement(nums) {
  let count = 0, candidate;

  // Phase 1: Find the candidate for the majority element
  for (let num of nums) {
      if (count === 0) {
          candidate = num;
          count = 1;
      } else if (num === candidate) {
          count++;
      } else {
          count--;
      }
  }

  // Phase 2: Verify the candidate
  let count2 = 0;
  for (let num of nums) {
      if (num === candidate) {
          count2++;
      }
  }

  return count2 > Math.floor(nums.length / 2) ? candidate : -1;
}
