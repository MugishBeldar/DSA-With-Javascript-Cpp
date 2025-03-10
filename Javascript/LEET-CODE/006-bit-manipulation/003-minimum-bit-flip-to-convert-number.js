// 2220. Minimum Bit Flips to Convert Number

// Example 1:

// Input: start = 10, goal = 7
// Output: 3
// Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
// - Flip the first bit from the right: 1010 -> 1011.
// - Flip the third bit from the right: 1011 -> 1111.
// - Flip the fourth bit from the right: 1111 -> 0111.
// It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3.
// Example 2:

// Input: start = 3, goal = 4
// Output: 3
// Explanation: The binary representation of 3 and 4 are 011 and 100 respectively. We can convert 3 to 4 in 3 steps:
// - Flip the first bit from the right: 011 -> 010.
// - Flip the second bit from the right: 010 -> 000.
// - Flip the third bit from the right: 000 -> 100.
// It can be shown we cannot convert 3 to 4 in less than 3 steps. Hence, we return 3.


// broute force approach
/*
Time Complexity: O(1)  
- Binary conversion and padding take O(1) (fixed 32-bit size).
- Loop runs at most 32 times → O(1).
- Overall, everything is constant time.

Space Complexity: O(1)
- Storing two 32-bit strings and an integer variable → O(1).
*/
var minBitFlips = function (start, goal) {
  let startBinary = start.toString(2).padStart(32, '0');
  let goalBinary = goal.toString(2).padStart(32, '0');
  let steps = 0;
  for (let i = 0; i < startBinary.length; i++) {
    if (startBinary[i] !== goalBinary[i]) {
      steps++;
    }
  }
  return steps;
};

// console.log(minBitFlips(10, 7)); // Output: 3
// console.log(minBitFlips(3, 4));  // Output: 3

// optimal solution 
// Time Complexity: O(K) where K is the number of bits
// Auxiliary Space: O(1)
// Count number of bits to be flipped
// to convert A into Bclass Count {

// Function that count set bits
function countSetBits(n) {
  var count = 0;
  while (n != 0) {
    // count += n % 2;  // Check if last digit is 1
    count += n & 1; // Check last bit
    // n = Math.floor(n / 2); // Remove last binary digit
    n >>= 1; // Right shift to remove last bit
  }
  return count;
}

// Function that return count of
// flipped number
function minBitFlips1(a, b) {
  // Return count of set bits in
  // a XOR b
  return countSetBits(a ^ b);
}

// Driver code
var a = 10;
var b = 20;
console.log(minBitFlips1(a, b))
