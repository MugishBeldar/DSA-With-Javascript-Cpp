function printNumber(n) {
  if(n===0) return;
  console.log(n);
  n--;
  printNumber(n);
}

printNumber(5);
