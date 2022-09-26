const isValid = (s) => {
  const left = [];
  const parenthesesMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      left.push(s[i]);
    } else if (parenthesesMap[left.pop()] !== s[i]) {
      return false;
    }
  }

  return left.length ? 0 : 1;
};

// Question: https://leetcode.com/problems/valid-parentheses/discuss/980783/Javascript-stack
