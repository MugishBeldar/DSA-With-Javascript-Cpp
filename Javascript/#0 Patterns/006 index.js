// pattern 6

// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1  

function pattern(n) {
  let pattern = '';
  for (let i = 0; i < n; i++) {
    let print = 1;
    for (let j = n; j > i; j--) {
      pattern += print + ' ';
      print++;
    }
    pattern += '\n'
  }
  console.log(pattern);
}

pattern(5);