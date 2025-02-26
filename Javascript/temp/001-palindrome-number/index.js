// Question:
// Write a function that takes an integer as input and determines if it is a palindrome number. A palindrome number reads the same forwards and backwards (e.g., 121, 1331). The function should return true if the number is a palindrome and false otherwise.

// Example Input and Output:

// Input: 121
// Output: true

// Input: 123
// Output: false

// Input: 1221
// Output: true

const palindrome = (number) => {
  let originalNumber = number;
  let reverseNumber = 0;
  if (number === 1 || number === 0) {
    return true;
  }
  while (originalNumber > 0) {
    let lastDigit = originalNumber % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    originalNumber = Math.floor(originalNumber / 10);
  }
  console.info(`\n\n[+] File:-- index.js, Line:-- 26, originalNumber===> `, originalNumber);
  console.info(`\n\n[+] File:-- index.js, Line:-- 27, reverseNumber===> `, reverseNumber);
  if (number === reverseNumber) {
    return true;
  }
  return false;
}

console.log(palindrome(11111))