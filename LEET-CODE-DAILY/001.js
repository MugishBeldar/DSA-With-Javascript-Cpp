// Example 1:

// Input: digits = [2,1,3,0]
// Output: [102,120,130,132,210,230,302,310,312,320]
// Explanation: All the possible integers that follow the requirements are in the output array. 
// Notice that there are no odd integers or integers with leading zeros.
// Example 2:

// Input: digits = [2,2,8,8,2]
// Output: [222,228,282,288,822,828,882]
// Explanation: The same digit can be used as many times as it appears in digits. 
// In this example, the digit 8 is used twice each time in 288, 828, and 882. 
// Example 3:

// Input: digits = [3,7,5]
// Output: []
// Explanation: No even integers can be formed using the given digits.

function findEvenNumbers(digits) {
  const freq = new Array(10).fill(0);
  for (let d of digits) {
      freq[d]++;
  }

  const result = [];

  for (let num = 100; num < 1000; num++) {
      if (num % 2 !== 0) continue; // must be even

      const a = Math.floor(num / 100);
      const b = Math.floor((num % 100) / 10);
      const c = num % 10;

      const tempFreq = [...freq];
      tempFreq[a]--;
      tempFreq[b]--;
      tempFreq[c]--;

      if (tempFreq[a] >= 0 && tempFreq[b] >= 0 && tempFreq[c] >= 0) {
          result.push(num);
      }
  }

  return result;
}

console.log(findEvenNumbers([3,7,5]));
