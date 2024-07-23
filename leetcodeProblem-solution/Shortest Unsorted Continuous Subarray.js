/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  let leftPointer = 0, rightPointer = nums.length-1;

  // increament left pointer until its next element is greater then to current element
  while(nums[leftPointer] <= nums[leftPointer+1] && leftPointer < nums.length-1) {
      leftPointer++;
  }

  // if left pointer value is equal to the arrys length then array is already sorted return 0
  if(leftPointer === nums.length-1) {
      return 0;
  }

  // increament right pointer untill ites previous element is less then to the current element
  while(nums[rightPointer] >= nums[rightPointer-1] && rightPointer > -1) {
      rightPointer--;
  }

  const subArr = nums.slice(leftPointer, rightPointer + 1);
  const subArrMin = Math.min(...subArr);
  const subArrMax = Math.max(...subArr);

  // extend window to the left when element in greater then subArrMin
  while(nums[leftPointer-1] > subArrMin && leftPointer > 0) {
      leftPointer--;
  }

  // extend window to the right when element is lessthen then subArrMax
  while(nums[rightPointer+1] < subArrMax && rightPointer < nums.length-1) {
      rightPointer++;
  }

  return rightPointer - leftPointer +1;

  // Time Complexity:--- O(n);
};

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]));
console.log(findUnsortedSubarray([1,2,3,4]));
console.log(findUnsortedSubarray([1]));