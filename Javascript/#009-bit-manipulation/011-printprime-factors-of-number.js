// broute force approach 
// time complexity O(sqrt(n))
// space complexity O(1)

function printPrimeFactorization(n) {
   // Loop until sqrt(n)
  for (let i = 2; i * i <= n; i++) { 
    if (n % i === 0) {
      let cnt = 0;
      while (n % i === 0) {
        n = n / i;
        cnt++;
      }
      console.log('factor', i, 'appears', cnt, 'times.');
    }
  }
  // If n is still greater than 1, it must be a prime factor
  if (n > 1) { 
    console.log('factor', n, 'appears 1 time.');
  }
}

// printPrimeFactorization(36);

// optimize number
// time complexity O(sqrt(n))
// space complexity O(1)

function printPrimeFactorization(n) {
  // find 2's factors
  let cnt = 0;
  // n&1 == n%2
  while ((n&1)===0) {
    // n>> = n/2
    n>>=1;
    cnt++;
  }
  if(cnt>0) console.log('factor 2', 'appears', cnt, 'time.');

  // check the odd factors using bitwise increament i+=2
  for (let i = 3; i * i <= n; i += 2) {
    cnt = 0;
    while (n % i === 0) {
      n /= i;
      cnt++;
    }
    if (cnt > 0) console.log('factor', i, 'appears', cnt, 'times.');
  }

  // If n is still > 1, it's a prime factor
  if (n > 1) {
    console.log('factor', n, 'appears 1 time.');
  }
}

printPrimeFactorization(36);
