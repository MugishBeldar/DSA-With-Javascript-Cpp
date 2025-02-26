// 118. Pascal's Triangle

// problem statement
// 1. give row and column give element of that place.

// tc = O(r)
// sc = O(1)
let row = 5, col = 3;
function nCr(n, r) {
  let res = 1;
  for (let i = 0; i < r; i++) {
    res = res * (n - i);
    res = res / (i + 1);
  }
  return res;
}
// console.log(nCr(row - 1, col - 1))

// 2. print any nth row of pascal triangle . for nth row have nth element

// approach 1 = broute force
// tc = O(cl * rw)
// sc = O(1)
function printNthRw1(rw) {
  for (let cl = 1; cl <= rw; cl++) {
    console.log(nCr(rw - 1, cl - 1));
  }
}
// printNthRw1(6);

// approach 2 = optimal
// tc = O(rw)
// sc = O(1)
function printNthRw2(rw) {
  let res = 1;
  console.log(res);
  for (let cl = 1; cl < rw; cl++) {
    res = res * (rw - cl);
    res = res / cl;
    console.log(res);
  }
}
// printNthRw2(6)

// 3. for given n print the entire triangle.

// approach 1 = broute force
// tc = O(n*n*r)
function printPascalTriangle1(n) {
  let ans = [];
  for (let row = 1; row <= n; row++) {
    let temp = [];
    for (let col = 1; col <= row; col++) {
      let ele = nCr(row - 1, col - 1);
      temp.push(ele);
    }
    ans.push(temp);
  }
  console.log(ans);
}
// printPascalTriangle1(6)

// approach 2 = optimal 
// tc = O(n2)
function printPascalTriangle2(n) {
  let ans = []
  for (let rw = 1; rw <= n; rw++) {
    let temp = [];
    let res = 1;
    temp.push(res);
    for (let cl = 1; cl < rw; cl++) {
      res = res * (rw - cl);
      res = res / cl;
      temp.push(res);
    }
    ans.push(temp);
  }
  console.log(ans);
}
printPascalTriangle2(6);