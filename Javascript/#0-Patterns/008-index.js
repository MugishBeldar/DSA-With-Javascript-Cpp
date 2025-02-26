function pattern8(n) {
  let pattern = '';
  for (let i = 0; i < n; i++) { // Iterate based on 'n'
    for (let k = 0; k < i; k++) { // Add leading spaces
      pattern += ' ';
    }
    for (let j = n; j > i; j--) { // Add stars
      pattern += '* ';
    }
    pattern += '\n'; // Move to the next line
  }
  return pattern;
}

console.log(pattern8(5));
