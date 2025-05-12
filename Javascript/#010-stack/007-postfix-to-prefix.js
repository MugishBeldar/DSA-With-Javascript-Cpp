function isOperator(op) {
  let oprators = ["+", "-", "/", "*", "^"];
  return oprators.includes(op);
}

function postfixtoprefix(exp) {
  let stack = [];
  let prefix = "";
  for (let i = 0; i <= exp.length - 1; i++) {
    if (!isOperator(exp[i])) {
      stack.push(exp[i])
    }
    else {
      let oprand1 = stack.pop();
      let oprand2 = stack.pop();
      prefix = exp[i] + oprand2 + oprand1;
      stack.push(prefix);
      console.log("prefix:--->", prefix);
    }
  }
  return stack.pop();
} 1

console.log("postfix  to prefix :--->", postfixtoprefix("pq+mn-*"));
// TIME COMPLEXITY = O(N) WHERE N = LENGHT OF EXPRESSION
// SPACE COMPLEXITY = O(N) WHERE N = SIZE OF STACK TO STORE POSTFIX EXPRESSION