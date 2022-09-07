// My solution
// I should not allocate another 2D matrix to solve the question
// But I broke the rule

var rotate = function (matrix) {
  let copy = [];

  for (let i = 0; i < matrix.length; i++) {
    copy.push([...matrix[i]]);
  }

  for (let i = 0; i < copy.length; i++) {
    let temp = [];

    for (let j = copy.length - 1; j >= 0; j--) {
      temp.push(copy[j][i]);
    }

    for (let k = 0; k < temp.length; k++) {
      matrix[i][k] = temp[k];
    }
  }

  return matrix;
};

// Most Voted Answer

const rotate = (matrix) => {
  matrix = matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  return matrix;
};

// Question: https://leetcode.com/problems/rotate-image/
