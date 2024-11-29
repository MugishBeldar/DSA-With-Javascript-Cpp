function printName(n) {
  if (n === 0) return;
  console.log('Hello world!', n);
  n--;
  printName(n)
}

printName(10);
