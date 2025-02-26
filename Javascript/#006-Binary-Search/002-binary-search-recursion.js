// tc = o(logn)
// sc = o(logn)
function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor((low + high) / 2);
  return search(nums, low, mid, high, target);
}

function search(nums, low, mid, high, target) {
  if (low > high) {
    return -1;
  }
  else if (nums[mid] === target) {
    return mid;
  }
  else if (nums[mid] < target) {
    low = mid + 1;
  }
  else {
    high = mid - 1;
  }
  mid = Math.floor((low + high) / 2)
  return search(nums, low, mid, high, target);
}
console.log(binarySearch([-1,0,3,5,9,12], 0)); 
