// Pattern 001
// * * * * 
// * * * * 
// * * * * 
// * * * * 

// Link
// https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/

function pattern1(n) {
  let pattern = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern += '* '
    }
    pattern += '\n'
  }
  console.log(pattern)
}

pattern1(4)

// time coplexity = o(n^2)