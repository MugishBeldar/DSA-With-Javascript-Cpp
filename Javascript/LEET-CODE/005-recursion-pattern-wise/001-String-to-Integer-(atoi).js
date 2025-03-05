// 8. String to Integer (atoi)

// Step 1: Check if the input string is empty, return 0 if true
// Step 2: Define the maximum and minimum integer limits (2^31 - 1 and -2^31)
// Step 3: Remove leading spaces from the string
// Step 4: Check for a sign ('+' or '-') and store it
// Step 5: Iterate through the string and convert digits to an integer
// Step 6: Handle overflow conditions, returning INT_MAX or INT_MIN if exceeded
// Step 7: Return the final computed integer with the correct sign

// Time Complexity: O(N)
// Space Complexity: O(1)
var myAtoi = function (s) {
  if (s.length === 0) return 0;
  let i = 0;
  let sign = 1;
  let ans = 0;
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  while (i < s.length && s[i] === ' ') i++;
  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    if (s[i] === '-') sign = -1;
    i++;
  }
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    ans = ans * 10 + (s[i] - '0');
    if (sign === 1 && ans > MAX) return MAX;
    if (sign === -1 && -ans < MIN) return MIN;
    i++;
  }
  return sign * ans;
};

console.log(myAtoi("42"));         // 42
console.log(myAtoi("   -42"));     // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648 (INT_MIN)
console.log(myAtoi("91283472332"));  // 2147483647 (INT_MAX)

// ----------------------------------------------------------------

// Using recursion 

// Step 1: Define integer limits (2^31 - 1 and -2^31)
// Step 2: Remove leading spaces recursively
// Step 3: Identify and store the sign ('+' or '-')
// Step 4: Extract digits recursively and compute the result
// Step 5: Handle overflow cases
// Step 6: Return the final computed integer with the correct sign

// Time Complexity: O(N)
// Space Complexity: O(N)
var myAtoi = function (s) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);

  function helper(index, sign, result) {
    if (index >= s.length || s[index] < '0' || s[index] > '9') {
      return sign * result;
    }

    result = result * 10 + (s[index].charCodeAt(0) - '0'.charCodeAt(0));

    if (sign === 1 && result > MAX) return MAX;
    if (sign === -1 && -result < MIN) return MIN;

    return helper(index + 1, sign, result);
  }

  function trimSpaces(i) {
    return i < s.length && s[i] === ' ' ? trimSpaces(i + 1) : i;
  }

  let i = trimSpaces(0);

  let sign = 1;
  if (i < s.length && (s[i] === '+' || s[i] === '-')) {
    if (s[i] === '-') sign = -1;
    i++;
  }

  return helper(i, sign, 0);
};

// Test Cases
console.log(myAtoi("42"));               // 42
console.log(myAtoi("   -42"));           // -42
console.log(myAtoi("4193 with words"));  // 4193
console.log(myAtoi("words and 987"));    // 0
console.log(myAtoi("-91283472332"));     // -2147483648 (INT_MIN)
console.log(myAtoi("91283472332"));      // 2147483647 (INT_MAX)
console.log(myAtoi("+123"));             // 123
console.log(myAtoi("0000123"));          // 123
console.log(myAtoi("   +0 123"));        // 0
console.log(myAtoi(""));                 // 0 (Edge case: empty string)
console.log(myAtoi("00000"));            // 0 (Leading zeroes)
console.log(myAtoi("-00042"));           // -42
console.log(myAtoi("   +42abc"));        // 42 (Ignore non-digit characters after numbers)

