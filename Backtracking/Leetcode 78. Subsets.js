// Cascading Solution

var subsets = function (nums) {
  const ans = [[]];

  for (let i = 0; i < nums.length; i++) {
    let temp = [];

    for (let j = 0; j < ans.length; j++) {
      const emptySubset = [...ans[j]];

      emptySubset.push(nums[i]);

      temp.push(emptySubset);
    }

    ans.push(...temp);
  }

  return ans;
};

// Question: https://leetcode.com/problems/subsets/
