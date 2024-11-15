// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

// Kadane's Algorithm
function kadanesAlgo(arr) {
  let sum = 0;
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > maxSum) {
      maxSum = sum;
    } 
    if (sum < 0) { 
      sum = 0;
    }
  }
  return maxSum;
}

console.log(kadanesAlgo([-2,1,-3,4,-1,2,1,-5,4]))
console.log(kadanesAlgo([5,4,-1,7,8] ))