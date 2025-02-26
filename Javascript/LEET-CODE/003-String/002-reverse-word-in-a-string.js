// 151. Reverse Words in a String
// using inbuild methods
// tc = on
// sc = 1;
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  s = s.split(' ').filter(str => str.trim().length >= 1);
  s = s.reverse();
  s = s.join(' ');
  return s;
};

// without using js inbuild methods
// tc = o(n)
// sc = 1;
var reverseWords = function (s) {
  s = s.trim();
  let result = '';
  let n = s.length - 1;
  while (n >= 0) {
    let word = '';
    while (s[n] == ' ' && n >= 0) {
      n--;
    }
    while (s[n] !== ' ' && n >= 0) {
      word = s[n] + word;
      n--;
    }
    result = result + word + ' ';
  }
  return result.trim();
};