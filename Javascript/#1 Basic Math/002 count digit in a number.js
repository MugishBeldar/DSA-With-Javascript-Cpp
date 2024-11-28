// BRUTE FORCE APPROACH :-- USED EXTRACTION OF DIGIT ALGORITHM
const countDigits = (number) => {
  let count = 0;
  if(number === 0) return 1
  while(number>0) {
    count++;
    number = Math.floor(number/10);
  }
  return count;
}

console.log(countDigits(10))
// if iteration n is divided by 10 then time complexity comes in log form her n is divided by 10
// TIME COMPLEXITY = O(log10(n))



// OPTIMAL APPROACH
const optimalCntDigit = (digit) => {
  // let cnt = Math.floor(Math.log10(digit)) + 1;
  // or get log digit base 10
  let cnt = Math.floor(Math.log(digit) / Math.log(10))+1 ;
  return cnt;
}

console.log(optimalCntDigit(1234567))

















