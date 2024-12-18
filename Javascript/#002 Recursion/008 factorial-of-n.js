// functional recursion 
// functional recursion have base condition
function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}

let n = 4;
console.log(fact(n));

// time complexity O(n)
// space complexity O(n)