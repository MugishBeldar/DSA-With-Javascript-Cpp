// Pattern 7


//     *
//    ***
//   *****
//  *******
// *********

function pattern(n) {
  let pattern = ''
  for (let i = 0; i <= 5; i++) {
    for (let k = 0; k < n - i; k++) {
      pattern += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      pattern += '*'
    }
    pattern += '\n'
  }
  console.log(pattern);
}

pattern(5)