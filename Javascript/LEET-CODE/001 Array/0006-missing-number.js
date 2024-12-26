// 268. Missing Number
// other formula is also sum of n number and sum off aray and subtract each other so we can get missing number 
// using xor
/**
 * @param {number[]} nums
 * @return {number}
 */

// broute force approach
// time complexity O(n^2)
// space complexity O(1)
function findMissingNumber(nums) {
  for (let i = 1; i <= nums.length; i++) {
    let found = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) {
      return i;
    }
  }
  return null;
}

// Example usage:
const nums = [0, 2, 3, 1, 5];
console.log(findMissingNumber(nums)); // Output: 4

// broute force approach
// time complexity O(nlogn)
// space complexity O(1)
// var missingNumber = function (nums) {
//     nums = nums.sort((a, b) => a - b);
//     for (let i = 0; i <= nums.length; i++) {
// here we can also do linear search
//         if (!nums.includes(i)) {
//             return i
//         }
//     }
// };

// better approach using hashing
function betterApproach(nums) {
  let hashMap = Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = 1;
  }
  for (let i = 0; i < hashMap.length; i++) {
    if (hashMap[i] == 0)
      return i;
  }
  return null
}
console.log('better approach :--->', betterApproach(nums))

// better approach 
// time complexity O(n)
// space complexity O(1)
var missingNumber = function (nums) {
  // nums = nums.sort((a, b) => a - b);
  let i = 0
  while (i <= nums.length) {
    // here we can also do liner search
    if (!nums.includes(i)) {
      return i;
    }
    i++;
  }
};


function xor(nums) {
  let xor1 = 0; // XOR of all numbers in the array
  let xor2 = 0; // XOR of all numbers from 1 to n

  for (let i = 0; i < nums.length; i++) {
    xor1 = xor1 ^ nums[i]; // XOR all elements in the array
    xor2 = xor2 ^ (i + 1); // XOR numbers from 1 to n (i+1 because i starts from 0)
  }

  xor2 = xor2 ^ (nums.length + 1); // Include the last number in the range (n)
  return xor1 ^ xor2; // The missing number
}

// Example usage:
console.log('xor solution', xor([2, 3, 1, 5])); // Output: 4
