// xor of number given range 
// N = 4
// ans = 4;

// broute force approach 
// time complexity: O(n)
// space complexity: O(1)
function xorOfGivenRange1(n) {
  let ans = 0;
  for(let i=1; i<=n; i++) {  
    ans = ans ^ i;
  }
  console.log('ans: ', ans);
}

// xorOfGivenRange1(4);

// optimal solution 
function xorOfGivenRange2(n) {
  if(n%4===1) return 1;
  else if(n%4===2) return n+1;
  else if(n%4===3) return 0;
  return n;
} 

// console.log('ans: ', xorOfGivenRange2(2));

// find xor for given range 
// time complexity O(1)
// space complexity O(1)
function findXorForGivenRange(l, r) {
  return xorOfGivenRange2(l-1, r);
}
console.log('ans:  ', findXorForGivenRange(4,7));