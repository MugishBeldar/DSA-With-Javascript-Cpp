const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [2, 3, 4, 4, 5];

// using js inbuild methods
function intersection(arr1, arr2) {
  let intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}

// time complexity O(n)
// space complexity O(n)
// not if we dont have to use include method we have to make serach function

// console.log(intersection(arr1, arr2));


// optimal approach 
function intersection2(arr1, arr2) {
  let intersection = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      intersection.push(arr1[i]);
      i++;
      j++;
    }
  }
  return intersection;
}

// time complexity O(n1+n2)
// space complexity O(n1)
console.log(intersection2(arr1, arr2))


