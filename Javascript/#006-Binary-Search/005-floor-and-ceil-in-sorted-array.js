function floorAndCeil(arr, x) {
  let low = 0;
  let high = arr.length;
  let floor = -1;
  let ceil = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === x) {
      floor = arr[mid];
      ceil = arr[mid];
      return`Floor:- ${floor}, Ceil:- ${ceil}`;
    } else if (arr[mid] > x) {
      ceil = arr[mid] || -1;
      floor = arr[mid-1] || -1;
      high = mid - 1;
    } else {
      low = mid +1;
    }
  }
  return`Floor:- ${floor}, Ceil:- ${ceil}`;
}
console.log(floorAndCeil([3, 4, 4, 7, 8, 10], 2))
