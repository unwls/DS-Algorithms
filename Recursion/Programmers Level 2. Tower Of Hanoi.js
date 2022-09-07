function solution(n) {
  return helperFunction(n, 1, 3, 2);
}

const helperFunction = (disk, departure, destination, waypoint) => {
  if (disk === 1) return [[departure, destination]];

  return [
    ...helperFunction(disk - 1, departure, waypoint, destination),
    ...[[departure, destination]],
    ...helperFunction(disk - 1, waypoint, destination, departure),
  ];
};

// Useful link: https://shoark7.github.io/programming/algorithm/tower-of-hanoi
// Question: https://school.programmers.co.kr/learn/courses/30/lessons/12946
