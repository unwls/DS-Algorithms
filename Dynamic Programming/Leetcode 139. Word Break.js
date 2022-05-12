var wordBreak = function (s, wordDict) {
  const hash = {};
  let left = 0;
  let right = 1;

  while (true) {
    const currentSubstring = s.substring(left, right);

    if (hash[currentSubstring]) {
      left = right;
      right = left + 1;
    } else if (wordDict.includes(currentSubstring)) {
      hash[currentSubstring] = 1;
      left = right;
      right = left + 1;
    } else {
      right++;
    }

    if (left === s.length && right >= s.length) {
      return true;
    }

    if (right >= s.length * 2) return false;
  }
};
