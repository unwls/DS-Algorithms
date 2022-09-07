function lengthOfLIS(nums) {
  if (!nums.length) return 0;

  const arr = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        arr[i] = Math.max(arr[i], arr[j] + 1);
      }
    }
  }

  return Math.max(...arr);
}

// Time Complexity O(n ^ 2)
// Space Complexity O(n)

// Question: https://leetcode.com/problems/longest-increasing-subsequence/
