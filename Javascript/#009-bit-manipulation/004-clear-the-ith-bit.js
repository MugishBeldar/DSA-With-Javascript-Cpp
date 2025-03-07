// clear the ith bit

// 1. optimal solution
// use bit wise and and bit wise not oprator

function clearTheIthBit(n, i) {
  let ans = n&~(1<<i); // intutioin in images
  console.log(ans);
}

let n = 4, i=2;
clearTheIthBit(n,i)
clearTheIthBit(13, 2); // Expected output: 9  (1101 -> 1001)
clearTheIthBit(15, 1); // Expected output: 13 (1111 -> 1101)
clearTheIthBit(8, 3);  // Expected output: 0  (1000 -> 0000)
clearTheIthBit(5, 0);  // Expected output: 4  (0101 -> 0100)
clearTheIthBit(37, 5); // Expected output: 5  (100101 -> 000101)
