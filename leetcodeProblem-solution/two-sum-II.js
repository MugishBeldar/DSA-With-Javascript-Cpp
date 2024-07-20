/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  
  let leftPointer = 0;
  let rightPointer = numbers.length-1;
  
  while(leftPointer !== rightPointer) {
      if(numbers[leftPointer]+numbers[rightPointer] < target) {
          leftPointer++;
      } else if (numbers[leftPointer]+numbers[rightPointer] > target) {
          rightPointer--;
      } else if(numbers[leftPointer]+numbers[rightPointer] === target) {
          return [leftPointer+1, rightPointer+1];
      }
  }

  // Time complexity :---> O(n);
};

console.log(twoSum([2,7,11,15], target = 9));
console.log(twoSum([2,3,4], target = 6));
console.log(twoSum([-1,0], target = -1));