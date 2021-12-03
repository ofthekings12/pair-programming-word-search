const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const transpose = function(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  for (const row of matrix) {
    for (const column in row) {
      newMatrix[column].push(row[column]);
    }
  }
  return newMatrix;
};
const traverseGrid = (grid, phraseArr) => {
  for (const arr of grid) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === phraseArr[0]) {
        if (eqArrays(arr.slice(i, phraseArr.length + i), phraseArr)) {
          return true;
        }
      }
    }
  }
  return false;
};
const wordSearch = (letters, word) => {
  const wordArr = word.split("");
  const transposed = transpose(letters);
  return ((traverseGrid(letters, wordArr) || (traverseGrid(transposed, wordArr))));
};
module.exports = wordSearch;