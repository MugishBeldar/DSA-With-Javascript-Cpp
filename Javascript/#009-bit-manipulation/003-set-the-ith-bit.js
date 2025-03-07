// set the ith bit

// 1. optimal solution 
// using left shift and bitwise or opration

function setIthBit(n, i) {
  let ans = 1 << i | n;
  console.log(ans);
}

let n = 1024, i = 3;
setIthBit(n,  i)