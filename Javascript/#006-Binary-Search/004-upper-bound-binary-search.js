function upperBound(arr, x) {
  let low = 0, high = arr.length;
  
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    
    if (arr[mid] > x) {
      high = mid; // Fix: Don't subtract 1
    } else {
      low = mid + 1;
    }
  }
  
  console.log('Upper Bound:--->', low); // Answer is stored in `low`
  return low;
}

// Example Usage:
upperBound([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); // Output: Upper Bound:---> 9
