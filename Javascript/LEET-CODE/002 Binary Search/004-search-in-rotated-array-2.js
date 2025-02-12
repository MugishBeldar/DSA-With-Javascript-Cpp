// 81. Search in Rotated Sorted Array II

// approac one 
// tc = ologn
// sc = o1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search1 = function (nums, target) {
  if (nums.indexOf(target) !== -1) {
    return true;
  }
  return false;
};

// broute approach 
// tc = on2
// sc = o1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function sortNums(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
}
function binarySearch(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}
var search2 = function (nums, target) {
  // if(nums.indexOf(target)!==-1) {
  //     return true;
  // }
  // return false;
  nums = sortNums(nums);
  return binarySearch(nums, target);
};

// optimal solution
// tc = nlogn
// sc = o1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function sortNums(nums) {
  // selection sort;
  // for (let i = 0; i < nums.length; i++) {
  //     let minIndex = i;
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if (nums[j] < nums[minIndex]) {
  //             minIndex = j;
  //         }
  //     }
  //     [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  // }
  // return nums;

  return nums.sort((a, b) => a - b);
}
function binarySearch(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}
var search3 = function (nums, target) {
  // if(nums.indexOf(target)!==-1) {
  //     return true;
  // }
  // return false;
  nums = sortNums(nums);
  return binarySearch(nums, target);
};

// more optimal solution 
// tc logn
// sc o1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search4 = function (nums, target) {
  let low = 0, high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === nums[low] && nums[mid] === nums[high]) {
      low = low + 1;
      high = high - 1;
      continue; 
    }
    if (nums[mid] === target) {
      return true;
    }

    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return false;
};
