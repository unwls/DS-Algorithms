function solution(n, k) {
  const answer = [];
  const people = Array.from({ length: n }, (_, i) => i + 1);
  let caseNum = people.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );

  while (answer.length < n) {
    caseNum = caseNum / people.length;
    answer.push(...people.splice(Math.floor((k - 1) / caseNum), 1));
    k = k % caseNum;

    // console.log(...people.splice(Math.floor((k - 1) / caseNum), 1));
  }

  return answer;
}

console.log(solution(3, 5));

// 1 2 3
// 2 3 2
// 3 1 1
