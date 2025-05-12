function isOperator(op) {
  let oprators = ["+", "-", "/", "*", "^"];
  return oprators.includes(op);
}

function prefixToPostfix(exp) {
  let stack = [];
  let postFix = "";
  for (let i = exp.length - 1; i >= 0; i--) {
    if (!isOperator(exp[i])) {
      stack.push(exp[i])
    }
    else {
      let oprand1 = stack.pop();
      let oprand2 = stack.pop();
      postFix = oprand1 + oprand2 + exp[i];
      stack.push(postFix);
      console.log("postfix:--->", postFix);
    }
  }
  return stack.pop();
}

console.log("prefix to postfix :--->", prefixToPostfix("*+pq-mn"));
// TIME COMPLEXITY = O(N) WHERE N = LENGHT OF EXPRESSION
// SPACE COMPLEXITY = O(N) WHERE N = SIZE OF STACK TO STORE POSTFIX EXPRESSION