// Bubble sort works by repeatedly swapping adjacent elements if they are in the wrong order.
// After each pass (iteration), the largest unsorted element is moved to the end of the array.
// In a recursive implementation:
// We handle the largest element in the current pass.
// Then recursively call the function on the remaining unsorted portion of the array (excluding the last element that is already sorted).

let arr = [90, 13, 2, 54, 6, 5, 54];

function bubbleSortRecursion(arr, n = arr.length) {
  if (n <= 1) return arr;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  // recursive call
  return bubbleSortRecursion(arr, n - 1);  // excluding the last element that is already sorted.
}

console.log(bubbleSortRecursion(arr, arr.length));

// time complexity O(n*(n+1)/2) = O(n^2) // summation of n number 
// space complexity O(1)