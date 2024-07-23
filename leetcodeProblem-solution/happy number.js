/**
 * @param {num} n
 * @return {boolean}
 */
var sumOfSquare = function(num) {
  let sum=0;
  while(num!==0) {
      let digit = num % 10;
      sum = sum + (digit*digit);
      num = Math.floor(num/10);
  }
  return sum;
}

var isHappy = function(n) {
  // hare and tortois algorithm used
  let slowPointer = n;
  let fastPointer = n;

  while(true) {
      slowPointer = sumOfSquare(slowPointer);
      fastPointer = sumOfSquare(sumOfSquare(fastPointer));

      if(slowPointer === 1 && fastPointer === 1) return true;
      if(slowPointer === fastPointer) return false;
  }

};

// time complexity = O(n)
// cyclic pettern
// example 2
// 4
// 16
// 37
// 58
// 25+64 == 89  => repeat
// 64 + 81 = 145
// 1 + 16 + 25 = 42
// 12
// 5
// 25
// 29
// 85
// 89 => repeat