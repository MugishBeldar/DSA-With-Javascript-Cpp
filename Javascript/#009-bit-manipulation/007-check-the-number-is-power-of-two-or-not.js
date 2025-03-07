function checkPowerOfTwo(n) {
  if ((n & (n - 1)) == 0 && n > 0) {
    console.log('It is a power of two.');
  } else {
    console.log('It is not a power of two.');
  }
}

checkPowerOfTwo(31); // Expected output: "It is not a power of two."
checkPowerOfTwo(4);  // Expected output: "It is a power of two."
checkPowerOfTwo(8);  // Expected output: "It is a power of two."
checkPowerOfTwo(0);  // Expected output: "It is not a power of two."
checkPowerOfTwo(1);  // Expected output: "It is a power of two."
checkPowerOfTwo(16); // Expected output: "It is a power of two."
