// 18. 4 sum

// broute = not work time limit exceeded
// tc = O(n4)
// sc = O(n)
function fourSum1(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            let temp = [nums[i], nums[j], nums[k], nums[l]];
            temp = temp.sort((a, b) => a - b);
            result.push(temp);
          }
        }
      }
    }
  }
  let uniqueResult = new Set(result.map(JSON.stringify));
  uniqueResult = Array.from(uniqueResult).map(JSON.parse);
  return uniqueResult;
}

// console.log(fourSum1([1, 0, -1, 0, -2, 2], 0));

// better
// tc = O(n3)
// sc = O(no of quadrant*2)
function fourSum2(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let hashSet = new Set();
      for (let k = j + 1; k < nums.length; k++) {
        let fourth = target-(nums[i] + nums[j] + nums[k]);
        if (hashSet.has(fourth)) {
          let temp = [nums[i], nums[j], nums[k], fourth]
          temp = temp.sort((a, b) => a - b);
          result.push(temp);
        }
        hashSet.add(nums[k]);
      }
    }
  }
  let uniqueResult = new Set(result.map(JSON.stringify));
  uniqueResult = Array.from(uniqueResult).map(JSON.parse);
  return uniqueResult;
}
// console.info(`\n fourSum2 :--->`, fourSum2([2,2,2,2,2], 8));

// optimal 
// tc = O(n3)
// sc = no of quad

function fourSum3(nums, target) {
  let n = nums.length;
  let ans = [];
  // sort the given array:
  nums = nums.sort((a,b) => a-b);
    //calculating the quadruplets:
    for (let i = 0; i < n; i++) {
        // avoid the duplicates while moving i:
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < n; j++) {
            // avoid the duplicates while moving j:
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            // 2 pointers:
            let k = j + 1;
            let l = n - 1;
            while (k < l) {
                let sum = nums[i];
                sum += nums[j];
                sum += nums[k];
                sum += nums[l];
                if (sum == target) {
                    let temp = [nums[i], nums[j], nums[k], nums[l]];
                    ans.push(temp);
                    k++; l--;
                    //skip the duplicates:
                    while (k < l && nums[k] == nums[k - 1]) k++;
                    while (k < l && nums[l] == nums[l + 1]) l--;
                }
                else if (sum < target) k++;
                else l--;
            }
        }
    }
    return ans;
}
console.info(`\n fourSum3 :--->`, fourSum3([2,2,2,2,2], 8));
