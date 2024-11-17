function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // Assume the current element is the smallest
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j; // Update minIndex if a smaller element is found
      }
    }
    if (minIndex !== i) {
      swap(i, minIndex, array); // Swap the smallest element with the current element
    }
  }
  return array; // Return the sorted array after all iterations
}

function swap(i, minIndex, array) {
  let temp = array[i];
  array[i] = array[minIndex];
  array[minIndex] = temp;
}

console.log(selectionSort([11, 333, 1, 5, 3, 2, 0, 1]));
