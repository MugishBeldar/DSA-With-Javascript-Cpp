// pattern 5

// * * * * 
// * * * 
// * * 
// * 

function pattern(n) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = n-1; j >= i; j--) {
      pattern += '* ';
    }
    pattern += '\n';
  }
  console.log(pattern);
}

pattern(5);