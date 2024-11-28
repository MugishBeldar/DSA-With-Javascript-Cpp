// Ques 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;

let maxProfit = (arr) => {
  let globalProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j=i+1; j < arr.length; j++) {
      let currentProfit = arr[j] - arr[i];
      if (currentProfit > globalProfit) {
        globalProfit = currentProfit;
      }
    }
  }
  return globalProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 10]));  // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));

// gredy approch is minimum purchase price 


