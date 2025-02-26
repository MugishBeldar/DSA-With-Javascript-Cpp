// 1903. Largest Odd Number in String
/**
 * @param {string} num
 * @return {string}
 */
// tc = on
// sc = o1  
var largestOddNumber = function (num) {
  if (parseInt(num.slice(-1)) % 2 === 1) return num;
  let i = num.length - 1;
  while (i >= 0) {
    const n = parseInt(num[i]);
    if (n % 2 === 1) return num.slice(0, i + 1);
    i--;
  }
  return "";
};