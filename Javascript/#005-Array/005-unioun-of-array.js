const arr1 = [10, 1, 2, 3, 4, 5];
const arr2 = [8, 2, 3, 4, 4, 5, 6, 7];

// broute force using js inbuild methods
function union(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      arr1.push(arr2[i]);
    }
  }
}

// time complexity O(n)
// space complexity O(1)
// not if we dont have to use include method we have to make serach function

// union(arr1, arr2);
// console.log(arr1)

// optimal approach 
function union2(arr1, arr2) {
  let union = new Set();
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (i == 0 || arr1[i] <= arr2[j]) {
      union.add(arr1[i]);
      i++;
    }
    else {
      union.add(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    union.add(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    union.add(arr2[j]);
    j++;
  }
  return union;
}

// time complexity O(n1 + n2)
// space complexity O(n1 + n2)

console.log(union2(arr1, arr2));