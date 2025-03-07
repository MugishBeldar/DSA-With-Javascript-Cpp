// removing the last set bit 

// 1100  (12 in decimal)
// & 1011  (11 in decimal)
// --------
//   1000  (8 in decimal)

function removingTheLastSetBit(n) {
  let ans = n & (n - 1);
  console.log(ans);
}

removingTheLastSetBit(12);  // Expected output: 8  (1100 -> 1000)
removingTheLastSetBit(7);  // Expected output: 6  (0111 -> 0110)
removingTheLastSetBit(10); // Expected output: 8  (1010 -> 1000)
removingTheLastSetBit(15); // Expected output: 14 (1111 -> 1110)
removingTheLastSetBit(1);  // Expected output: 0  (0001 -> 0000)
removingTheLastSetBit(0);  // Expected output: 0  (Edge case: no set bits)
