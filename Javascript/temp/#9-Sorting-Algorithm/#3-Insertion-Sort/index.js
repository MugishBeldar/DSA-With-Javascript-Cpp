function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = current;
  }
  return array;
}
console.log(insertionSort([8, 4, 3, 7, 6, 1, 2, 5]));

// current = 4
// j = 0

// 0 > 0 8 > 4 true
// 88376125

// 48376125