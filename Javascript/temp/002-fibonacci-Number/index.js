// Question:
// Write a function that takes a positive integer n as input and returns the nth number in the Fibonacci sequence. The Fibonacci sequence is defined as follows:

// The first two numbers in the sequence are 0 and 1.
// Each subsequent number is the sum of the previous two numbers.
// The sequence begins: 0, 1, 1, 2, 3, 5, 8, 13, ...

// Examples:

// Input: n = 5
// Output: 3

// Input: n = 10
// Output: 34

// Constraints:

// Your solution should handle inputs where n is at least 1.

const FibonacciNumberOnNthPosition = (n) => {
  const fibonacciSequence = [0, 1];
  let firstNumber = 0;
  let secondNumber = 1;
  for (let i = 2; i <= n; i++) {
    let next = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = next;
    fibonacciSequence.push(next);
  }
  return fibonacciSequence[n-1];
}

console.log(FibonacciNumberOnNthPosition(10)); // Output: 3