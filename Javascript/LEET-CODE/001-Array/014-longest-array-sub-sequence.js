const arr = [100, 200, 1, 3, 2, 4, 5, 6, 7, 20, 8, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010];

const longestArraySequence = (arr) => {
  let sequenceLength = 1;
  let max = 1;
  arr = [...new Set(arr)].sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === 1) {
      sequenceLength++;
      max = Math.max(sequenceLength, max);
    } else {
      sequenceLength = 1;
    }
  }
  return max;
};

console.log(longestArraySequence(arr));
