
var numSubseq = function(nums, target) {
  const MOD = Math.pow(10, 9) + 7;
  nums.sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let totalNumSubSeq = 0;

  let pow2 = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
      pow2[i] = (pow2[i - 1] * 2) % MOD;
  }

  while (leftPointer <= rightPointer) {
      if (nums[leftPointer] + nums[rightPointer] > target) {
          rightPointer--;
      } else {
          totalNumSubSeq = (totalNumSubSeq + pow2[rightPointer - leftPointer]) % MOD;
          leftPointer++;
      }
  }

  return totalNumSubSeq;
};
// time complexity O(nlogn)
