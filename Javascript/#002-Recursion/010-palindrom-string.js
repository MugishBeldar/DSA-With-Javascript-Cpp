let s = "A man, a plan, a canal: Panama";
s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
console.log('\n\n[+]: str', s);
function palindromeStr(l) {
  if (s.charAt(l) !== s.charAt(s.length - 1 - l)) return false;
  if (l >= Math.floor(s.length / 2)) return true;
  return palindromeStr(l + 1);
}

console.log(palindromeStr(0));

// time complexity O(n)
// space complexity O(n)