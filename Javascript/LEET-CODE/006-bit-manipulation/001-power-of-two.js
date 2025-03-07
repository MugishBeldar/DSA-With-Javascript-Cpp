// 231 power of two

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if ((n & (n - 1)) == 0 && n > 0) {
  // console.log('It is a power of two.');
  return true;
} else {
  // console.log('It is not a power of two.');
  return false;
}
};