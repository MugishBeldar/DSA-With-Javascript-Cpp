// 50. Pow(x, n)

// Step 1: Handle base cases
// - If x is 0, return 0 (since anything multiplied by 0 is 0)
// - If n is 0, return 1 (since any number raised to power 0 is 1)

// Step 2: Handle negative exponent
// - If n is negative, convert it to positive and take reciprocal at the end

// Step 3: Apply Exponentiation by Squaring
// - If n is even: x^n = (x^2)^(n/2)
// - If n is odd: x^n = x * x^(n-1)
// - Reduce n by half at each step to achieve O(log n) complexity

// Step 4: Return the final computed power

// Time Complexity: O(log n) → Since we divide n by 2 in each iteration
// Space Complexity: O(1) → Constant space used (only a few variables)

var myPow = function (x, n) {
  if (x === 0) return 0;
  if (n === 0) return 1;

  let isNegative = n < 0;
  n = Math.abs(n);
  let result = 1;

  while (n > 0) {
    if (n % 2 === 1) result *= x;
    x *= x;  
    n = Math.floor(n / 2);
  }

  return isNegative ? 1 / result : result;
};

// Test Cases
console.log(myPow(2.1, 3));  // Output: 9.261
console.log(myPow(2.0, -2)); // Output: 0.25
console.log(myPow(2.0, 10)); // Output: 1024
console.log(myPow(0, 5));    // Output: 0 (Edge case)
console.log(myPow(5, 0));    // Output: 1 (Edge case)
console.log(myPow(-2, 3));   // Output: -8
console.log(myPow(-2, 4));   // Output: 16
console.log(myPow(2, -3));   // Output: 0.125

//------------------------------------------------------


// 50. Pow(x, n) - Recursive Approach

// Step 1: Handle base cases
// - If x is 0, return 0 (since anything multiplied by 0 is 0)
// - If n is 0, return 1 (since any number raised to power 0 is 1)

// Step 2: Handle negative exponent
// - If n is negative, convert it to positive and take reciprocal at the end

// Step 3: Apply Recursion with Exponentiation by Squaring
// - If n is even: x^n = (x^2)^(n/2)
// - If n is odd: x^n = x * x^(n-1)

// Step 4: Return the final computed power

// Time Complexity: O(log n) → Since we divide n by 2 in each recursive call
// Space Complexity: O(log n) → Due to recursive stack space

var myPow = function (x, n) {
  if (n === 0) return 1; // Step 1: Base case (n = 0)
  if (x === 0) return 0; // Step 1: Base case (x = 0)

  if (n < 0) return 1 / myPow(x, -n); // Step 2: Handle negative exponent

  if (n % 2 === 0) {
    let half = myPow(x, n / 2); // Step 3: Recursive call for even n
    return half * half;
  } else {
    return x * myPow(x, n - 1); // Step 3: Recursive call for odd n
  }
};

// Test Cases
console.log(myPow(2.1, 3));  // Output: 9.261
console.log(myPow(2.0, -2)); // Output: 0.25
console.log(myPow(2.0, 10)); // Output: 1024
console.log(myPow(0, 5));    // Output: 0 (Edge case)
console.log(myPow(5, 0));    // Output: 1 (Edge case)
console.log(myPow(-2, 3));   // Output: -8
console.log(myPow(-2, 4));   // Output: 16
console.log(myPow(2, -3));   // Output: 0.125
