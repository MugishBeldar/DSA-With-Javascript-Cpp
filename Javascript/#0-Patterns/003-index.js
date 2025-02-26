// Pattern 3 

// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 

function pattern3(n) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += j + 1 + ' '
    }
    pattern += '\n';
  }
  console.log(pattern)
}

pattern3(4)