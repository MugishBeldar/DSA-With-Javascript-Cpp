function checkNumberIsOddOrNot(n) {
  let isOne = n & 1; // n%2==1
  if(isOne == 1) {
    console.log('number is odd')
  } else {
    console.log('number is even')
  }
} 

checkNumberIsOddOrNot(1) 