// Length of the longest subarray with zero Sum

// Example 1:
// Input Format
// : N = 6, array[] = {9, -3, 3, -1, 6, -5}
// Result
// : 5
// Explanation
// : The following subarrays sum to zero:
// {-3, 3} , {-1, 6, -5}, {-3, 3, -1, 6, -5}
// Since we require the length of the longest subarray, our answer is 5!

// Example 2:
// Input Format:
//  N = 8, array[] = {6, -2, 2, -8, 1, 7, 4, -10}
// Result
// : 8
// Subarrays with sum 0 : {-2, 2}, {-8, 1, 7}, {-2, 2, -8, 1, 7}, {6, -2, 2, -8, 1, 7, 4, -10}
// Length of longest subarray = 8

// Example 3:
// Input Format:
//  N = 3, array[] = {1, 0, -5}
// Result
// : 1
// Subarray : {0}
// Length of longest subarray = 1

// Example 4:
// Input Format:
//  N = 5, array[] = {1, 3, -5, 6, -2}
// Result
// : 0
// Subarray: There is no subarray that sums to zero

function longestSubArrayWithZeroSumBrute(arr, n) {
  let maxLength = 0;
  
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum === 0) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }
  
  return maxLength;
}

// Test Cases
console.log(longestSubArrayWithZeroSumBrute([9, -3, 3, -1, 6, -5], 6));  // Output: 5


function longestSubArrayWithZeroSumOptimized(arr, n) {
  let prefixSum = 0;
  let longestLen = 0;
  let sumIndexMap = new Map();

  for (let i = 0; i < n; i++) {
    prefixSum += arr[i];

    // If sum becomes 0, update longestLen
    if (prefixSum === 0) {
      longestLen = i + 1;
    }

    // If sum already exists, update longestLen
    if (sumIndexMap.has(prefixSum)) {
      longestLen = Math.max(longestLen, i - sumIndexMap.get(prefixSum));
    } else {
      // Store first occurrence of sum
      sumIndexMap.set(prefixSum, i);
    }
  }

  return longestLen;
}

// Test Cases
console.log(longestSubArrayWithZeroSumOptimized([9, -3, 3, -1, 6, -5], 6));  // Output: 5
