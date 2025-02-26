function sumOfN(i) {
  if (i === 0) {
    return 0;
  }
  return i + sumOfN(i - 1);
}

let n = 3;
console.log(sumOfN(n));