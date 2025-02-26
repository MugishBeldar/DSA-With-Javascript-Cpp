function isPrimeNumber(number) {
  let divisors = 0;
  for (let i = 1; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisors += 1;
      if (number / i !== i) {
        divisors += 1;
      }
    }
  }
  console.log(divisors);
  return divisors <= 2;
}

console.log(isPrimeNumber(7));
