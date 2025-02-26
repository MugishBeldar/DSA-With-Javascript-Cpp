const arr = [10, 22, 12, 3, 0, 6];

// broute force
// tc = approx O(n^2)
// sc = worst O(n)
const findLeaders = (arr) => {
  let leaders = [];
  for (let i = 0; i < arr.length; i++) {
    let ithNum = arr[i];
    let isSmall = false;
    for (let j = i; j < arr.length; j++) {
      let jthNum = arr[j]
      if (jthNum > ithNum) {
        isSmall = true;
        break;
      }
    }
    if (!isSmall) {
      leaders.push(ithNum);
    }
  }
  return leaders;
}

// optimal
// tc O(n)
// sc O(n)
const findLeaders1 = (arr) => {
  let leaders = [];
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      leaders.push(arr[i]);
      max = arr[i];
    }
  }
  return leaders.reverse();
}
console.log(findLeaders1(arr));
console.log(findLeaders(arr));