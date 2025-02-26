function sumOfN(i, sum) {
  if (i === 0) {
    console.log(sum);
    return;
  };
  sumOfN(i - 1, sum + i); // parameterized sum
}

let n = 3;
let sum = 0;
sumOfN(n, sum)