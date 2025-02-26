const arr = [1, 2, 3, 4, 5];
const searchElement = 1;

function search(arr, num) {
  if (arr.length && arr[0] == num) {
    return 0;
  }
  if (arr.length && arr[arr.length - 1] == num) {
    return arr.length - 1
  }
  for (let i = 0; i < arr.length; i++) {
    console.log('inside loop');
    if (arr[i] == num) {
      return i;
    }
  }
  return -1;
}

// time complexity:- worst = O(n), best = O(1)
// space complexity = O(1)

console.log(search(arr, searchElement))