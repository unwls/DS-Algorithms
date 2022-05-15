// Backtracking answer
// Time Complexity O(n Log n)

var combinationSum = function (candidates, target) {
  const answer = [];

  candidates.sort((a, b) => a - b);

  function recurse(arr = [], num = target, index = 0) {
    if (num === 0) {
      answer.push(arr);
      return;
    }

    if (num < 0) {
      return;
    }

    while (index < candidates.length && num - candidates[index] >= 0) {
      recurse([...arr, candidates[index]], num - candidates[index], index);

      index++;
    }
  }

  recurse();

  return answer;
};
