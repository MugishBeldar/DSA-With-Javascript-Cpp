// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]
// [7,6,5,4,3,2,1] ==> reverse array 


let rotateByK = (arr, k) => {
  let length = arr.length - 1;
  // first make it reversed
  reverseSift(arr, 0, length);
  // roatate first half
  reverseSift(arr, 0, k - 1);
  // roatate second half
  reverseSift(arr, k, length);
}

let reverseSift = (arr, start, end) => {
  let temp;
  while (start < end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

console.log(rotateByK([-1, -100, 3, 99], k = 2))