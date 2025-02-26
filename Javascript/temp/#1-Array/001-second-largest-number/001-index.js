// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// Brute Force Approach

let secondlargest = (arr1) => {
  let firstMax = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr1.length; i++) { 
    if (arr1[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr1[i];
    }
    else if (arr1[i] != firstMax && arr1[i] > secondMax) { 
      secondMax = arr1[i];
    }
  }
  return secondMax;
}

console.log(secondlargest([12, 35, 1, 10, 34, 1]))