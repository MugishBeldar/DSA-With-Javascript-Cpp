// swap two numbers

// 1.  broute force approach
function swapTwoNumbers(a, b) {
  let arr = [a, b];
  [b, a] = arr;
  console.log("b:", b, "a:", a);
}

// 2. broute force approach using third variable
function swapTwoNumbers2(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log("b:", b, "a:", a);

}



// 3. optimal using xor 

// xor 
// -- same number of xor is 0

function swapNumbers3(a,b) {
  a = a^b; //2^3 = 2^3;
  b = a^b; //2^3^3 = 2
  a = a^b; //2^3^2 = 3
  console.log("b:", b, "a:", a);

}

let a = 2;
let b = 3;
// swapTwoNumbers(a, b);
// swapTwoNumbers2(a, b);
swapNumbers3(a,b)