let arr = [90, 13, 2, 54, 6, 5, 54];
function insertionSort(arr, n = 0) {
  if (n == arr.length) return arr;
  let j = n;
  while (j > 0 && arr[j] < arr[j - 1]) {
    let temp = arr[j];
    arr[j] = arr[j - 1];
    arr[j - 1] = temp;
    j--;
  }
  return insertionSort(arr, n + 1); // first element comes on it's actual position
}

console.log(insertionSort(arr, 0));
// time complexity O(n^2)
// space complexity O(1)