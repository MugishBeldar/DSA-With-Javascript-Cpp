var reverseWords = function (s) {
  // 1st two pointer
  s = s.trim();
  let result = '';
  let i=s.length-1;
  while(i>=0) {
    let word = '';
    while(s[i]===' ' && i>=0){
      i--;
    }
    while(s[i]!==' ' && i>=0){
      word=s[i]+word;
      i--;
    }
    result = result+word+' ';
  }
  return result.trim();
  // time complexity:---> O(n);

  // 2nd using js inbuild function
  // s = s.trim();
  // s = s.toString().replace(/\s+/gi,' ')
  // return s.split(' ').reverse().join(' ');
}

console.log(reverseWords('sky is blue'));
console.log(reverseWords('a good   example'));
console.log(reverseWords('   hello       world   '));