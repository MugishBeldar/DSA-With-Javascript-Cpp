// check the array is sorted or not

// 1
// try to sort array using selection sort
// if it will inside if condition than return false
// else return true

function isArraySorted(arr) {
  let isSorted = true;
  outer: for (let i = 0; i < arr.length; i++) {
    inner: for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] >= arr[j]) {
        isSorted = false;
        break inner;
      }
    }
    if (!isSorted) {
      break outer;
    }
  }
  return isSorted;

  // time complexity
  // best O(n) j's first itration not get any smallest value
  // worst O(n^2) array is allready sorted
}

// 2 optimal approach
// traverse array and compare previous element with current element

function isArraySorted2(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      continue
    } else {
      return false;
    }
  }
  return true
}

let arr = [1, 2, 6, 3, 4, 5];
console.log(isArraySorted(arr));
console.log(isArraySorted2(arr))