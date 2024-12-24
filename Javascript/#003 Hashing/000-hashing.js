// Hashing Techniques: Division, Folding, and Mid-Square Methods
// Hashing techniques define how a key is converted into an index to store data in a hash table. These methods aim to distribute keys uniformly across 
// the hash table to minimize collisions.

// Division Method
// The Division Method is one of the simplest and most commonly used hashing techniques. It uses the remainder operation (modulus) to compute the index.

// Formula:
// h(key) = key % table_size

// Where:
// key is the value to be hashed.
// table_size is the number of slots in the hash table (should typically be a prime number to reduce clustering).
// Example:
// Key: 123
// Table size: 10
// Hash function: 123 % 10 = 3
// The key 123 will be stored at index 3 in the hash table.

// Advantages:
// Simple to implement.
// Fast computation.
// Disadvantages:
// Can lead to clustering if table_size is not chosen properly (e.g., if it is not prime).

function divisionMethod(key, tableSize) {
  return key % tableSize; // Compute the index
}

// Folding Method
// The Folding Method divides the key into smaller parts, processes each part (e.g., by summing them up), and then uses the result to calculate the hash.

// Steps:
// Divide the key into equal-sized parts (except possibly the last part).
// Add, subtract, or XOR these parts together.
// Apply the modulo operation with the table size to get the index.
// Example:
// Key: 987654
// Divide into parts: 98, 76, and 54.
// Sum the parts: 98 + 76 + 54 = 228.
// Hash function: 228 % 10 = 8.
// The key 987654 will be stored at index 8.

// Advantages:
// Effective for larger keys (e.g., account numbers or phone numbers).
// Helps spread data more uniformly.
// Disadvantages:
// More computationally intensive than the division method.

function foldingMethod(key, tableSize) {
  const keyStr = key.toString(); // Convert the key to a string
  const partSize = 2; // Define the size of each part
  let sum = 0;

  // Split the key into parts of size `partSize`
  for (let i = 0; i < keyStr.length; i += partSize) {
    const part = keyStr.substring(i, i + partSize); // Extract a part
    sum += parseInt(part); // Convert the part to a number and add to sum
  }

  return sum % tableSize; // Compute the index
}

// Mid Squar Method
// The Mid-Square Method squares the key and extracts the middle digits of the result to determine the hash.

// Steps:
// Square the key.
// Extract the middle digits of the squared value.
// Use the modulo operation with the table size to calculate the index.
// Example:
// Key: 123
// Square the key: 123² = 15129.
// Extract the middle digits: 15129 → 512 (middle digits).
// Hash function: 512 % 10 = 2.
// The key 123 will be stored at index 2.

// Advantages:
// Works well for uniformly spreading keys.
// Does not depend directly on the table size or key distribution.
// Disadvantages:
// Computationally expensive (requires squaring and digit extraction).

function midSquareMethod(key, tableSize) {
  const squared = key * key; // Square the key
  const squaredStr = squared.toString(); // Convert the squared number to a string
  const midIndex = Math.floor(squaredStr.length / 2); // Find the middle index
  const middleDigits = squaredStr.substring(midIndex - 1, midIndex + 2); // Extract 3 middle digits
  const hash = parseInt(middleDigits); // Convert back to a number

  return hash % tableSize; // Compute the index
}

// Testing 

const key = 123;
const tableSize = 10;

console.log(`Division Method: Key ${key} maps to index ${divisionMethod(key, tableSize)}`);
console.log(`Folding Method: Key ${987654} maps to index ${foldingMethod(987654, tableSize)}`);
console.log(`Mid-Square Method: Key ${key} maps to index ${midSquareMethod(key, tableSize)}`);
