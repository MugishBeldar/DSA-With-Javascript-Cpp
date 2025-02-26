// leetcode 9 

// use digit extraction algorithm time complexity is o(log10n)
const palindrome = function (number) {
  let preserveNumber = number;
  let reverseNumber = 0;
  while (number !== 0) {
    let digit = number % 10;
    reverseNumber = (reverseNumber * 10) + digit;
    number = Math.trunc(number / 10);
  }
  return preserveNumber === reverseNumber;
}
console.log(palindrome(12321));
