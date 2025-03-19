function prec(c) {
  if (c == '^') return 3;
  else if (c == '/' || c == '*') return 2;
  else if (c == '+' || c == '-') return 1;
  else return -1;
}

function infixToPostfix(exp) {
  let st = [];
  let result = '';

  for (let i = 0; i < exp.length; i++) {
    let char = exp.charAt(i);

    // If the scanned character is an operand, add it to the output string.
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      result += char;
    }
    // If the scanned character is ‘(‘, push it to the stack.
    else if (char == '(') {
      st.push(char);
    }
    // If the scanned character is ‘)’, pop from stack to output until ‘(’ is encountered.
    else if (char == ')') {
      while (st.length > 0 && st[st.length - 1] != '(') {
        result += st.pop();
      }
      st.pop(); // Remove '(' from stack
    }
    // If an operator is scanned
    else {
      while (st.length > 0 && prec(char) <= prec(st[st.length - 1])) {
        result += st.pop();
      }
      st.push(char);
    }
  }

  // Pop all remaining operators from the stack
  while (st.length > 0) {
    result += st.pop();
  }

  return result;
}

console.log(infixToPostfix('(p+q)*(m-n)')); // Expected Output: pq+mn-*
