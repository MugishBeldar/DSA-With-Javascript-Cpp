// logics for ascii

// A == 65

// a == 97 
// b == 98
// z == 122

// console.log('f'.charCodeAt(0) - 'a'.charCodeAt(0))  // give char index 
// console.log('1'.charCodeAt(0));

let str = 'ansbcncbASdBBA';
let getCountFor = ['a', 'b', 'c', 'd', 'e', 'f', 'g', "A", "B", "C", "D", "E", "F"]

function charCount(str) {
  // we have total 256 ascii characters
  let hashArray = Array(256).fill(0);

  // pre computation
  for (const c of str) {
    hashArray[c.charCodeAt(0)]++;
  }

  // fetching
  for (const c of getCountFor) {
    if (hashArray[c.charCodeAt(0)] >= 0) {
      console.log("char", c, ": ", hashArray[c.charCodeAt(0)]);
    }
  }
}

charCount(str);