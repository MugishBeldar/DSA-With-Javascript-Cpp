let array = [3, 2, 1, 4, 6, 5];

// select minimuls and swap with ith element
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(selectionSort(array));

// time complexity O(n*(n+1)/2) = O(n^2) // summation of n number 
// space complexity O(1)