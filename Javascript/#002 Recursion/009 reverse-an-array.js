let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// 3rd method 
// without two pointers 
function reverseArrayWithoutTwoPointers(l) {
  if (l >= Math.floor(arr1.length / 2)) return;
  swap(l, arr1.length - 1 - l);
  return reverseArrayWithoutTwoPointers(l + 1);
}

reverseArrayWithoutTwoPointers(0);
console.log('reverseArrayWithoutTwoPointers:-->', arr1);

// time complexity o(n/2) = o(n)
// space complexity o(n/2) = o(n)

// 2nd method 
// using two pointer, swapping and recursion
function reverseArrayUsingTwoPointers(l, r) {
  if (l >= r) return;
  swap(l, r);
  reverseArrayUsingTwoPointers(l + 1, r - 1);
}

function swap(l, r) {
  let temp = arr1[l];
  arr1[l] = arr1[r];
  arr1[r] = temp;
}

reverseArrayUsingTwoPointers(0, arr1.length - 1);
console.log("arr1", arr1);

// time complexity o(n)
// space complexity o(n)

// 1st method
// parameterised recursion.
function reverseArray(reverArr, arr) {
  if (i == arr.length) return reverArr;
  reverArr.unshift(arr[i]);
  return reverseArray(reverArr, arr, i++);
}


console.log(reverseArray([], arr, i = 0)); // [9,8,7,6,5,4,3,2,1]

// time complexity O(n)
// space complexity O(n)