var findAndReplacePattern = function (words, pattern) {
  const res = [];

  for (let i = 0; i < words.length; i++) {
    const patternHash = {};
    const wordHash = {};
    let flag = true;

    for (let j = 0; j < pattern.length; j++) {
      console.log(patternHash, wordHash);

      const currentWord = words[i][j];
      const currentPatternWord = pattern[j];

      if (wordHash[currentWord] !== patternHash[currentPatternWord]) {
        flag = false;

        break;
      }

      wordHash[currentWord] = j;
      patternHash[currentPatternWord] = j;
    }

    if (flag) res.push(words[i]);
  }

  return res;
};

console.log(
  findAndReplacePattern(["badc", "abab", "dddd", "dede", "yyxx"], "baba")
);

// Question: https://leetcode.com/problems/find-and-replace-pattern/
