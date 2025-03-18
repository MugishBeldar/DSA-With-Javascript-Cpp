// find two number in array who appear in odd times
// [1,2,3,1,2,3,4,5]
// ans = [4,5];

// broute force approach

function findNumber(arr) {
  let map = {};
  let ans = [];
  for(let i=0; i<arr.length; i++) {
    if(map[arr[i]]) {
      map[arr[i]] = map[arr[i]] + 1;
    } else {
      map[arr[i]] = 1;
    }
  }
  console.log('mapped obj: ', map);
  for(let key in map) {
    if(map[key]==1) ans.push(key)
  }
return ans;
}

console.log('ans: ', findNumber([1,2,3,1,2,3,4,5]))

// remaining optimal solution 
