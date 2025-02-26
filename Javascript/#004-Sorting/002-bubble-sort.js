// bubble sort 
// swap two adjustant elements
// end of first itration largest element goes at the end

let arr = [90, 13, 2, 54, 6, 5, 54];
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));

// same as selection sort