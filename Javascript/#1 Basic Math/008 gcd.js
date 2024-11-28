// // brute force approach
// // time complexity in O(min(n1, n2))
// function findGCD(n1, n2) {
//   let gcd = 1;
//   for (let i = Math.min(n1, n2); i>=1; i--) {
//     if (n1%i===0 && n2%i===0) {
//       gcd = i;
//       break;
//     }
//   }
//   return gcd;
// }
//
// console.log(findGCD(11,13));

// ================================================
// EUCLIDEAN ALGORITHM
// time complexity O(log fi (min(a,b) ) );
function euclidean(a, b) {
  while (a>0 && b>0) {
    if(a>b) a = a%b;
    if(b>a) b = b%a;
  }
  if (a==0) return b;
  return a;
}

// console.log(euclidean(10,10));
// euclidean is not a==b here one catch always a>b -- number1 > number2
console.log(euclidean(11,13));





























