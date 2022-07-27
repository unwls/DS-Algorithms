function solution(k, dungeons) {
  const length = dungeons.length;
  const visited = new Array(length).fill(0);
  let ans = 0;

  function dfs(gage, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < length; j++) {
      if (gage >= dungeons[j][0] && !visited[j]) {
        visited[j] = 1;

        dfs(gage - dungeons[j][1], cnt + 1);

        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);

  return ans;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

// Useful link: https://velog.io/@khw970421/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9C%84%ED%81%B4%EB%A6%AC%EC%B1%8C%EB%A6%B0%EC%A7%80-%ED%94%BC%EB%A1%9C%EB%8F%84
