// 73. Set Matrix Zeroes

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

// broute 
// -- first grab the position of the zeros and store rows and columns locations
// -- then make that  rows and cols vlaue zero
function setZeros(matrix) {
  let map = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        let rowColMap = [i, j];
        map.push(rowColMap);
      }
    }
  }

  for (let rowColMap of map) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (rowColMap[0] == i || rowColMap[1] == j) {
          matrix[i][j] = 0
        }
      }
    }
  }

  return matrix;
}

// console.log(setZeros(matrix));

function setZeros2(matrix) {
  let row = Array(matrix.length).fill(0)
  let col = Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if ((row[i] || col[j])) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

console.log(setZeros2(matrix));
