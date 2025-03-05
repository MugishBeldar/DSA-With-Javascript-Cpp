// 1922. Count Good Numbers
/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
  let MOD = BigInt(10**9 +7);
  n = BigInt(n); 

  let evenPos = (n + 1n) / 2n ;
  let oddPos =  n / 2n ;

  function modPow(base , exp , MOD){
      if(exp === 0n) return 1n;

      if(exp % 2n === 0n ){
          const half = modPow(base , exp/2n , MOD);
          return (half*half) % MOD;
      }else{
          return (base * modPow(base , exp - 1n , MOD));
      }
  }

  let countEven = modPow(5n , evenPos, MOD);
  let countOdd = modPow(4n , oddPos, MOD);

  return Number((countEven * countOdd) % MOD);
};