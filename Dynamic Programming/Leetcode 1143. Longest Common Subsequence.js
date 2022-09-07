var longestCommonSubsequence = function (text1, text2) {
  let dpTable = [];

  for (let i = 0; i <= text1.length; i++) {
    dpTable.push(new Array(text2.length + 1).fill(0));
  }

  for (let i = 1; i < dpTable.length; i++) {
    for (let j = 1; j < dpTable[0].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dpTable[i][j] = dpTable[i - 1][j - 1] + 1;
      } else {
        dpTable[i][j] = Math.max(dpTable[i - 1][j], dpTable[i][j - 1]);
      }
    }
  }

  return dpTable[text1.length][text2.length];
};

// Visualizing DP 2D DP table
// Longest common subsequence
// Time Complexity is O(m * n)
// Space Complexity is O(m * n)

// Useful video
// https://www.youtube.com/watch?v=ASoaQq66foQ
// https://www.youtube.com/watch?v=sSno9rV8Rhg
// https://www.youtube.com/watch?v=NnD96abizww <- Tushar Roy

// Question: https://leetcode.com/problems/longest-common-subsequence/
