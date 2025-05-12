// tc = o(nlogn)
// sc = o(1)
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found, return index
    } else if (arr[mid] < target) {
      low = mid + 1; // Search right half
    } else {
      high = mid - 1; // Search left half
    }
  }

  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // Output: 5
