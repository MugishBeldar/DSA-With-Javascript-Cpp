// 48 rotate matrix by 90 degree

const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];

function rotate(matrix) {
  const n = matrix.length;
  const copy = JSON.parse(JSON.stringify(matrix));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[j][n - 1 - i] = copy[i][j];
    }
  }
  return matrix;
}

console.log(rotate(matrix))

// sacond method 
// transpose the matrix
// reverse each row
