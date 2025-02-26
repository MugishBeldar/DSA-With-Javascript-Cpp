function lowerBound(arr, x) {
  let low = 0;
  let high = arr.length;
  let lb = arr.length;
  while (low<high) {
    let mid = Math.floor((low + high)/2);
    if(arr[mid]>=x) { // change here for upper bound
      lb = mid;
      high = mid-1;
    }
    if (arr[mid]<x) {
      low = mid +1;
    }
  }
  console.log('Lower Bound:--->', lb);
}
lowerBound([1, 2, 3, 4, 5, 6, 7, 8, 9],9);