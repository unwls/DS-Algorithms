var generateMatrix = function (n) {
  const answer = new Array(n).fill(0).map(() => new Array(n).fill(0));
  const size = n * n;

  let count = 0;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  while (count < size) {
    for (let i = left; i <= right; i++) {
      count++;
      answer[top][i] = count;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      count++;
      answer[i][right] = count;
    }
    right--;

    for (let i = right; i >= left; i--) {
      count++;
      answer[bottom][i] = count;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      count++;
      answer[i][left] = count;
    }
    left++;
  }

  return answer;
};

console.log(generateMatrix(4));
