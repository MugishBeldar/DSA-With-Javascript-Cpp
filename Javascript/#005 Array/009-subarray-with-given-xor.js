// Count the number of subarrays with given xor K
// Example 1:
// Input Format:
//  A = [4, 2, 2, 6, 4] , k = 6
// Result:
//  4
// Explanation:
//  The subarrays having XOR of their elements as 6 are  [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]

// Example 2:
// Input Format:
//  A = [5, 6, 7, 8, 9], k = 5
// Result:
//  2
// Explanation:
//  The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]

// broute approach
// tc=O(n2)
// sc=O(1)
function subArrayXOR(arr,k) {
  let result = 0;
  for (let i=0; i<arr.length; i++) {
    let xor=0;
    for (let j=i; j<arr.length; j++) {
      xor = xor ^ arr[j]
      if (xor===k) {
        result++;
      }
    }
  }
  return result;
}
console.log(subArrayXOR([5, 6, 7, 8, 9], 5));