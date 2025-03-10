// broute force 
// time complexity = O(n)
// space complelxity = O(n)
var singleNumber = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]]++;
    }
  }
  for (let key in map) {
    if (map[key] === 1) {
      return Number(key);
    }
  }
};

// optimal solution 
// using xor
// time complelxity = O(n-1) = O(n);
// space complexity = O(1);
function singleNumber1(nums) {
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    ans = ans ^ nums[i];
  }
  return ans;
}

console.log(singleNumber1([4, 1, 2, 1, 2]));