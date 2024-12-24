const numbers = [1, 2, 3, 2, 1, 2, 4, 5, 2, 1, 1];

function maxNumberApearingCount(numbers) {
  let hashMap = {};
  for (let num of numbers) {
    // if (hashMap[num]) {
    //   hashMap[num] = hashMap[num] + 1;
    // } else {
    //   hashMap[num] = 1;
    // }
    hashMap[num] = hashMap[num] ? hashMap[num] + 1 : 1;
  }
  console.log('hashMap', hashMap);
  const maxNumber = Math.max(...Object.values(hashMap));
  console.log('maxNumber', maxNumber);
  let ansMap = {}
  for (const [key, value] of Object.entries(hashMap)) {
    if (value === maxNumber) {
      ansMap[key] = value;
    }
  }
  console.log('ansMap', ansMap);
}
maxNumberApearingCount(numbers);
