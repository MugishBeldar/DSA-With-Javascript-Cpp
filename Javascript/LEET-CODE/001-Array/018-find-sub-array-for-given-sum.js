// 560. Subarray Sum Equals K

function findAllSubarraysWithGivenSum(arr, k) {
  const n = arr.length; // size of the given array
  let count = 0; // Number of subarrays

  for (let i = 0; i < n; i++) { // starting index i
    let sum = 0;
    for (let j = i; j < n; j++) { // ending index j
      // Calculate the sum of subarray [i...j]
      sum += arr[j];

      // Increase the count if sum == k
      if (sum === k) {
        count++;
      }
    }
  }

  return count;
}

// Example usage
const arr = [3, 1, 2, 4];
const k = 6;
const count = findAllSubarraysWithGivenSum(arr, k);
console.log("The number of subarrays is:", count);
