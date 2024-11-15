// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

let removeDuplicates = (arr) => {
  if (arr.length === 0) return 0;
  let firstPointer = 0;
  for (let secondPointer = 1; secondPointer < arr.length; secondPointer++) {
    if (arr[firstPointer] !== arr[secondPointer]) {
      firstPointer++;
      arr[firstPointer] = arr[secondPointer];
    }
  }
  return firstPointer + 1;
}

console.log(removeDuplicates([0,1,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7]))