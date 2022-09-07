function solution(numbers, target) {
  const length = numbers.length;
  let answer = 0;

  function dfs(index, sum) {
    if (index === length) {
      if (sum === target) {
        answer++;
      }

      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));

// Useful link: https://jjnooys.medium.com/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84-javascript-1d7983d423b5
// Question: https://school.programmers.co.kr/learn/courses/30/lessons/43165#:~:text=%EC%A0%9C%ED%95%9C%EC%82%AC%ED%95%AD,%EC%9D%B4%EC%83%81%201000%20%EC%9D%B4%ED%95%98%EC%9D%B8%20%EC%9E%90%EC%97%B0%EC%88%98%EC%9E%85%EB%8B%88%EB%8B%A4.
