// Quick Sort function
function qs(arr, low, high) {
  if (low < high) {
    // Partition the array and get the pivot index
    const pi = partition(arr, low, high);

    // Recursively sort the subarrays
    qs(arr, low, pi - 1); // Elements before pivot
    qs(arr, pi + 1, high); // Elements after pivot
  }
}

// Partition function
function partition(arr, low, high) {
  let pivot = arr[low]; // Choose the first element as pivot
  let i = low + 1; // Start pointer for left side
  let j = high; // Start pointer for right side

  while (i <= j) {
    // Increment i until an element greater than the pivot is found
    while (i <= high && arr[i] <= pivot) {
      i++;
    }

    // Decrement j until an element less than or equal to the pivot is found
    while (j >= low && arr[j] > pivot) {
      j--;
    }

    // Swap elements if i < j
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Place the pivot in its correct position
  [arr[low], arr[j]] = [arr[j], arr[low]];

  // Return the index of the pivot
  return j;
}

// Test the implementation
let arr = [90, 13, 2, 54, 6, 5, 54];
qs(arr, 0, arr.length - 1);
console.log(arr);
