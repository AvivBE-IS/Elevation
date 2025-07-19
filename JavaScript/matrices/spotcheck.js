const matrix = [[1, 2], [3, 4], [5, 6], [7, 8], [9]];

function generateMatrix(numRows, numColumns) {
  let matrix = [];
  let num = 1;

  for (let r = 0; r < numRows; r++) {
    matrix.push([]);
    for (let c = 0; c < numColumns; c++) {
      matrix[r].push(num++);
    }
  }
  return matrix;
}

function printMat(matrix) {
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) console.log(matrix[i][j]);
}

function get(matrix, row, col) {
  return matrix[row][col];
}

function print(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let line = "";
    for (let j = 0; j < matrix[i].length; j++) {
      line += matrix[i][j] + "\t";
    }
    console.log(line);
  }
}

function printRow(rowNum) {
  for (let j = 0; j < matrix[rowNum].length; j++)
    console.log(matrix[rowNum][j]);
}

// printMat(matrix);
// console.log(get(matrix, 2, 1));
print(matrix);
printRow(2);
