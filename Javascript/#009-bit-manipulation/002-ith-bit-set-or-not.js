// set the ith bit

// 1. optimal solution
// left shift 
function setTheIthBit(n, i) {
  if(n & (1<<i)) {
    console.log('ith bit is set')
  } else {
    console.log('ith bit is not set');
  }
}

// 2. optimal solution
//  right shift
function setTheIthBit2(n, i) {
  if((n>>i)&1==0) {
    console.log('ith bit isset.');
  } else {
    console.log("ith bit is not  set.");
  }
}
let n = 3;
let i = 2;
setTheIthBit(n, i);
setTheIthBit2(n, i);