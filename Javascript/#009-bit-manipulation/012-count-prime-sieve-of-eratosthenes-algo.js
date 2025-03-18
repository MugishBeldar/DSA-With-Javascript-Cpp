// broute force approch trial division method 
// time complexity O(nsqrt(n))
// space complexity O(1)
function cntPrime1(n) {
  // No primes less than 2
  if (n < 2) return 0; 

  let cnt = 0;

  // Count 2 as prime explicitly
  if (n > 2) cnt = 1;

  // Check only odd numbers from 3 to n-1
  for (let i = 3; i < n; i += 2) {
    let isPrime = true;
    // Check only up to sqrt(i)
    for (let j = 2; j * j <= i; j++) { 
      if (i % j === 0) {
        isPrime = false;
        // Stop early when a factor is found
        break; 
      }
    }
    if (isPrime) cnt++;
  }

  return cnt;
}

console.log(cntPrime1(10)); 
console.log(cntPrime1(20)); 


// optimal solution
// sieve of eratosthenes algorithm
// time complexity O(n.loglogn) + O(n) // prime harmonic series
// space complexity O(n)

function cntPrime2(n) {
  let primes = Array(n).fill(1);
  primes[0] = 0 ;
  primes[1] = 0;
  for (let i=2; i*i<=n; i++) {
    if(primes[i]==1) {
      for (let j=2; i*j<=n; j++) {
        primes[i*j] = 0;
      }
    }
  }
  for(let i = 0; i <primes.length; i++) {
    if(primes[i]) console.log('prime no', i);
  }
}

cntPrime2(10)