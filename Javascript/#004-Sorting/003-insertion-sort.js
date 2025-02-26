// insertion sort
// place element its correct position

let arr = [1,8,0,2,4,8,33,111];

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j>0 && arr[j] < arr[j-1]) {
      let temp = arr[j];
      arr[j] = arr[j-1];
      arr[j-1] = temp;
      j--;
    }
  }
  return arr;
}

console.log(insertionSort(arr));

// time complexity O(n^2)
// space complexity O(1)