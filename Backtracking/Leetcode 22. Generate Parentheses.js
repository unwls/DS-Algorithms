const generateParenthesis = (n) => {
  const result = [];

  function recurse(str, closedLeft, openedLeft) {
    if (str.length === n * 2) {
      result.push(str);
    }

    if (openedLeft > 0) {
      recurse(str + "(", closedLeft + 1, openedLeft - 1);
    }

    if (closedLeft > 0) {
      recurse(str + ")", closedLeft - 1, openedLeft);
    }
  }

  recurse("", 0, n);

  return result;
};

// Question: https://leetcode.com/problems/generate-parentheses/
