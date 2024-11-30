function print1ToN(i, n) {
  if (i > n) return;
  print1ToN(i + 1, n);
  console.log(i);
}

let n = 4;
print1ToN(1, n);

// time complexity O(n)
// space complexity O(n)
