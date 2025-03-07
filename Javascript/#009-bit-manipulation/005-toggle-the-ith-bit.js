// toggle the bit
// hing xor 

// 1101  (13 in decimal)
// ^ 0100  (4 in decimal)
// --------
//   1001  (9 in decimal)


function toggleBit(n, i) {
  let ans = n ^ (1 << i);
  console.log(ans);
}
 toggleBit(13, 2); // Expected output: 9  (1101 -> 1001)
toggleBit(5, 0);  // Expected output: 4  (0101 -> 0100)
toggleBit(8, 3);  // Expected output: 0  (1000 -> 0000)
toggleBit(7, 1);  // Expected output: 5  (0111 -> 0101)
toggleBit(0, 4);  // Expected output: 16 (0000 -> 10000)
