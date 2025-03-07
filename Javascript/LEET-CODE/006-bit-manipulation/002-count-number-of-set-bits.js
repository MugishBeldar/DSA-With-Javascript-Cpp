// optimal solution
// Brian Kernighan’s Algorithm (Most Efficient)
// How it Works?
// Instead of checking every bit, this method removes the rightmost set bit in every iteration.
// The key observation is:

// n & (n - 1) flips the rightmost set bit to 0 while keeping other bits unchanged.

// Steps:
// Initialize count = 0.
// While n > 0:
// Use n & (n - 1) to remove the rightmost set bit.
// Increment the count.
// Return the count.
// Time Complexity: O(k), where k is the number of set bits (faster than O(log N)).
// Space Complexity: O(1).

function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    n = n & (n - 1); // Removes the rightmost set bit
    count++;
  }
  return count;
}

// Test Cases
console.log(countSetBits(7));  // Output: 3  (0111)
console.log(countSetBits(9));  // Output: 2  (1001)
console.log(countSetBits(15)); // Output: 4  (1111)
console.log(countSetBits(16)); // Output: 1  (10000)
console.log(countSetBits(0));  // Output: 0  (0000)


// Using toString(2).split('1').length - 1 (One-liner)
// Time Complexity: O(log N), due to binary conversion.
// Space Complexity: O(log N), due to string storage.
function countSetBits(n) {
  return n.toString(2).split('1').length - 1;
}

// Test Cases
console.log(countSetBits(7));  // Output: 3 (0111)
console.log(countSetBits(9));  // Output: 2 (1001)
console.log(countSetBits(15)); // Output: 4 (1111)


// Using n & 1 Bitwise Check (Iterative)
// How it Works?
// Check the last bit using n & 1.
// If the last bit is 1, increment the count.
// Right shift n (n >>= 1) to check the next bit.

function countSetBits(n) {
  let count = 0;
  while (n > 0) {
    // count += n % 2;  // Check if last digit is 1
    count += n & 1; // Check last bit

    // n = Math.floor(n / 2); // Remove last binary digit
    n >>= 1; // Right shift to remove last bit
  }
  return count;
}

// Test Cases
console.log(countSetBits(7));  // Output: 3 (0111)
console.log(countSetBits(9));  // Output: 2 (1001)
console.log(countSetBits(15)); // Output: 4 (1111)
console.log(countSetBits(16)); // Output: 1 (10000)
console.log(countSetBits(0));  // Output: 0 (0000)
