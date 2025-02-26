// Pattern 2

// * 
// * * 
// * * * 
// * * * * 

function pattern2(n) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += '* '
    }
    pattern += '\n'
  }
  console.log(pattern)
}

pattern2(4)

