// print 1 to n using backtracking

function print1Ton(i, n) {
  if (i<=0) return;
  // doing backtracking from n to 0
  print1Ton(i-1, n);
  console.log(i);
}
let n = 4;
print1Ton(n, n);

// time complexity O(n);
// space complexity O(n); -- because call stack function wait until last function return so.
