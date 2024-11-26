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
    for (let j = 1; j <= i; j++) {
      pattern += '* '
    }
    pattern += '\n'
  }
  for (let i = 0; i < n; i++) { // Iterate based on 'n'
    for (let k = 0; k < i; k++) { // Add leading spaces
      pattern += ' ';
    }
    for (let j = n; j > i; j--) { // Add stars
      pattern += '* ';
    }
    pattern += '\n'; // Move to the next line
  }
  console.log(pattern);
}

pattern(5)
