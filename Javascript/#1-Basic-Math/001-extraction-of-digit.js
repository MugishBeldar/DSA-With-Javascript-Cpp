const extractionOfDigits = (digit) => {
  while(digit>0){
    let extractedDigit = digit % 10;
    console.log(extractedDigit);
    digit = Math.floor(digit / 10);
  }
}

extractionOfDigits(1234);
// it will extract number in reverse order
// time complexity O(n)
// space complexity o(1)
