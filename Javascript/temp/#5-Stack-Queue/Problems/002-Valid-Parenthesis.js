function isValidParenthesis(parenthiesis) {
  let parenthiesisMap = [];
  let trackParenthesis = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let input of parenthiesis) {
    if (input === '(' || input === '{' || input === '[') {
      parenthiesisMap.push(input);
    }
    if (input === ')' || input === '}' || input === ']') {
      if (parenthiesisMap[parenthiesisMap.length - 1] === trackParenthesis[input]) {
        parenthiesisMap.pop();
      } else {
        return false
      }
    }
  }
  return !parenthiesisMap.length;
}

console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("({{{{{((((((((({}{}{}()()()[][][][])))))))))}}}}})")); // false