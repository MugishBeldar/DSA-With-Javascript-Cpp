// 1021. Remove Outermost Parentheses
// tc = on
// sc = 1;

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let ans = "";
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (cnt == 0 && s[i] == '(') {
      cnt++;
    } else if (s[i] == '(') {
      cnt++;
      ans += s[i]
    }
    if (cnt == 1 && s[i] == ')') {
      cnt--;
    } else if (s[i] == ')') {
      cnt--;
      ans += s[i]
    }
  }
  return ans;
};