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
    console.log(answer);
  }

  return answer;
}

console.log(solution(3, 5));

// Question: https://school.programmers.co.kr/learn/courses/30/lessons/12936
