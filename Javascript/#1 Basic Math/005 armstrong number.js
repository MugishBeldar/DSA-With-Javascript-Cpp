// extraction of digit algorithm used timecomplexity is O(log10n)
function isArmstrong(number) {
  let sum = 0;
  let temp = number;
  while (number>0) {
    let digit = number % 10;
    sum += (digit*digit*digit);
    number = Math.trunc(number/10);
  }
  return temp === sum
}

console.log(isArmstrong(123));
