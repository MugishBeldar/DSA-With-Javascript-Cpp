function reverseString(input) {
  let strStack = [];
  for (let char in input) {
    strStack.push(input[char]);
  }
  let reverseString = '';
  while (strStack.length > 0) {
    reverseString += strStack.pop();
  }
  return reverseString;
}


const originalString = "testset";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: dlrow olleh