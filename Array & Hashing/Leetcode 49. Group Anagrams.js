// My solution
// Time Complexity O(n^2)

var groupAnagrams = function (strs) {
  let copy = [...strs];
  let answer = [];
  let temp = [];
  const checker = {};

  copy.forEach((item, idx) => {
    temp.push([item.split("").sort().join(""), idx]);
  });

  temp.sort();

  for (let i = 0; i < temp.length; i++) {
    let ansTemp = [];
    let currentChar = temp[i][0];

    for (let j = i + 1; j < temp.length; j++) {
      const currentWord = temp[j][0];

      if (currentChar === currentWord) {
        ansTemp.push(temp[j]);
      }
    }

    if (!checker[currentChar]) {
      if (ansTemp.length === 0) {
        checker[currentChar] = 1;
        answer.push(temp[i]);
      } else {
        checker[currentChar] = 1;
        ansTemp.push(temp[i]);
        answer.push(ansTemp);
      }
    }
  }

  const realAnswer = [];

  for (let i = 0; i < answer.length; i++) {
    let temporaryArr = [];

    if (answer[i][1].length > 1) {
      for (let j = 0; j < answer[i].length; j++) {
        temporaryArr.push(strs[answer[i][j][1]]);
      }
    } else {
      temporaryArr.push(strs[answer[i][1]]);
    }

    realAnswer.push(temporaryArr);
  }

  return realAnswer;
};

// Best Answer
// Time Complexity O(n)

const groupAnagrams = (strs) => {
  const map = {};

  for (let str of strs) {
    const key = [...str].sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(str);
  }

  return Object.values(map);
};

// Question: https://leetcode.com/problems/group-anagrams/
