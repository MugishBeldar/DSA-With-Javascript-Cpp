// 136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */

// Better approach
// TC = O(n +  (n/2 + 1)) = O(n);
// SC = O(n)
var singleNumber = function (nums) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      hashMap[nums[i]] = hashMap[nums[i]] + 1;
    } else {
      hashMap[nums[i]] = 1;
    }
  }
  // this loop run n/2 + 1 times.
  for (let key in hashMap) {
    if (hashMap[key] == 1) {
      return +key;
    }
  }
};


// broute force
// TC = O(n^2);
// SC = O(1)
var singleNumber2 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let findNum = nums[i];
    let findNumCount = 0;
    for (let j = 0; j < nums.length; j++) {
      if (findNum === nums[j]) {
        findNumCount++;
      }
    }
    if (findNumCount == 1) {
      return findNum;
    }
  }
}

// console.log(singleNumber2([1, 1, 2, 2, 3, 3, 4]));


// optimal approach 
// TC = O(n);
// SC = O(1)
var singleNumber3 = (nums) => {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

console.log(singleNumber3([1, 1, 2, 2, 3, 3, 4]));