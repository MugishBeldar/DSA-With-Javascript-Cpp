const arr = [100, 200, 1, 3, 2, 4, 5];

// broute
function longestConsecutiveSequenceInArray1(arr) {
  let longestSequence = 1;
  for (let i = 0; i < arr.length; i++) {
    let elm = arr[i] + 1;
    let sequence = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === elm) {
        sequence += 1;
        elm++;
        j = -1;
      }
    }
    longestSequence = Math.max(sequence, longestSequence);
  }
  return longestSequence;
}
// console.log(longestConsecutiveSequenceInArray1(arr));

// better
function longestConsecutiveSequenceInArray2(arr) {
  let count = 0, longest = 1, lastSmaller = -Infinity;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 == lastSmaller) {
      count++;
      lastSmaller = arr[i];
    }
    else if (lastSmaller != arr[i]) {
      count = 1;
      lastSmaller = arr[i];
    }
    longest = Math.max(longest, count);
  }
  return longest;
}
// console.log(longestConsecutiveSequenceInArray2(arr));

// optimal
// approach
// -- itrate arra and make set --> it will make unique set of array
// -- iterate set
// -- take element if its previous element is exist inside set then nothing to do
// -- if not then inside other loop chet next element in set by increamenting

function searchingLongestConsecutiveSequence(vlaue, map, count) {
  while (map.has(vlaue)) {
    count++;
    vlaue = vlaue + 1;
  }
  return count;
}
function longestConsecutiveSequenceInArray3(arr) {
  let longest = 1;
  let map = new Set([...arr]);
  // console.log(map);
  for (let vlaue of map) {
    let count = 0;
    if (!map.has(vlaue - 1)) {
      count = searchingLongestConsecutiveSequence(vlaue, map, count);
    }
    longest = Math.max(longest, count);
  }
  return longest;
}

console.log(longestConsecutiveSequenceInArray3(arr))