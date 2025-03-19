// post fix to infix
// time complexity O(n)
// space complexity O(n/2) = O(n)

function postfixToInfix(exp) {
  let st = [];
  for(let i=0; i<exp.length; i++) {
    let char = exp.charAt(i);
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      st.push(char);
    } else {
      let last = st.pop();
      let secondLast = st.pop();
      let newExp = '(' + secondLast + char + last + ')';
      st.push(newExp);
    }
  }
  return st.pop();
}

console.log(postfixToInfix('pq+mn-*')); 