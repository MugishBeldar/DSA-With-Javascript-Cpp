// brut force approach time complexity is O(n)
// function printDivisors(number) {
//   let divisors = '';
//   for (let i = 1; i <= number; i++) {
//     if (number % i === 0) {
//       divisors += i.toString() + ', ';
//     }
//   }
//   // Remove the trailing ', ' from the divisors string
//   divisors = divisors.slice(0, -2);
//   return divisors;
// }
//
// console.log(printDivisors(13));




// optimal approach
function printDivisions(number) {
  let divisions = [];
  // o(sqrt(n))
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if(number % i === 0 && number/i !== i) {
      divisions.push(i);
      divisions.push(number/i);
    }
    if (number/i===i) {
      divisions.push(i);
    }
  }
  // O(nlogn) --> n = number of divisiors
  divisions.sort((a, b) => a - b);

  // O(number of divisiors)
  for (let i = 0; i < divisions.length; i++) {
    console.log(divisions[i]);
  }
}
// time complexity = O(n)
printDivisions(13)
















