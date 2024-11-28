// LEETCODE 7

// EXTRACTION OF DIGIT ALGORITHM USED
const reverseDigits = (number) => {
  let reverse = 0;
  while (number > 0) {
    let digit = number % 10;
    reverse = (reverse * 10) + digit;
    number = Math.floor(number / 10);
  }
  return reverse;
}
console.log(reverseDigits(123400))
// TIME COMPLEXITY = O(log10n)
