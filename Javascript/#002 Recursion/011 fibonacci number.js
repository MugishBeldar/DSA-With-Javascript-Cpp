// Multiple recursion calls perform
function fibonacciNumber(n) {
  if (n <= 1) return n;
  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log(fibonacciNumber(4));

// time complexity O(2^n)