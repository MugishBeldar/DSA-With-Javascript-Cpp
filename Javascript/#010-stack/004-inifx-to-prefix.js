function prec(c) {
  if (c == '^') return 3;
  else if (c == '/' || c == '*') return 2;
  else if (c == '+' || c == '-') return 1;
  else return -1;
}

function reverseExp(exp) {
  let result = '';
  for (let i = exp.length - 1; i >= 0; i--) {
    if (exp[i] == '(') result += ')';
    else if (exp[i] == ')') result += '(';
    else result += exp[i];
  }
  return result;
}

function infixToPrefix(exp) {
  exp = reverseExp(exp);
  let st = [];
  let result = '';

  for (let i = 0; i < exp.length; i++) {
    let char = exp.charAt(i);

    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      result += char;
    }
    else if (char == '(') {
      st.push(char);
    }
    else if (char == ')') {
      while (st.length > 0 && st[st.length - 1] != '(') {
        result += st.pop();
      }
      st.pop();
    }
    else {
      while (
        st.length > 0 && 
        (prec(char) < prec(st[st.length - 1]) || 
        (prec(char) == prec(st[st.length - 1]) && char != '^'))
      ) {
        result += st.pop();
      }
      st.push(char);
    }
  }

  while (st.length > 0) {
    result += st.pop();
  }
  return reverseExp(result);
}

console.log(infixToPrefix('(p+q)*(m-n)')); 
