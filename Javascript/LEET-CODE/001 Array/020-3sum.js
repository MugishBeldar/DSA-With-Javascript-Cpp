// 15. 3Sum

// approach 1 = broute force
// tc = O(n3)
// sc = o(n)
// this solution is not work time limit exceeded 


var threeSum1 = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let triplet = [nums[i], nums[j], nums[k]];
          triplet.sort((a, b) => a - b);
          ans.push(triplet);
        }
      }
    }
  }
  let uniqueTriplets = new Set(ans.map(JSON.stringify));
  ans = Array.from(uniqueTriplets).map(JSON.parse);
  console.log(ans);
};

// approach 2 = better
// tc = O(n2 nlogn)
// sc = O(n)
function triplet(n, arr) {
  let ans = [];
  for (let i = 0; i < n; i++) {
    let hashset = new Set();
    for (let j = i + 1; j < n; j++) {
      //Calculate the 3rd element:
      let third = -(arr[i] + arr[j]);

      //Find the element in the set:
      if (hashset.has(third)) {
        let temp = [arr[i], arr[j], third];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      }
      hashset.add(arr[j]);
    }
  }

  //store the set in the answer:
  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
}

let arr = [-1, 0, 1, 2, -1, -4];
let n = arr.length;
console.log(triplet(n, arr));

// optimize solution
// tc 
// sc 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var searchPair = function (triplets, target, leftPointer, nums) {
  let rightPointer = nums.length - 1;
  while (leftPointer < rightPointer) {
    const currentSum = nums[leftPointer] + nums[rightPointer];
    if (target === currentSum) {
      triplets.push([-target, nums[leftPointer], nums[rightPointer]]);
      leftPointer++;
      rightPointer--;
      while (nums[leftPointer - 1] === nums[leftPointer] && leftPointer < rightPointer) {
        leftPointer++;
      }
      while (nums[rightPointer + 1] === nums[rightPointer] && leftPointer < rightPointer) {
        rightPointer++;
      }
    } else if (target < currentSum) {
      rightPointer--;
    } else if (target > currentSum) {
      leftPointer++;
    }
  }
}

var threeSum = function (nums) {
  const triplets = [];
  for (let i = 0; i < nums.length; i++) {
    let target = -nums[i];
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    const leftPointer = i + 1;
    searchPair(triplets, target, leftPointer, nums);
  }
  return triplets;
};

