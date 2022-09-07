var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const frontCopy = [...nums].slice(0, nums.length - 1);
  const backCopy = [...nums].slice(1, nums.length);

  let temp = 0;
  let current = 0;
  let prev = 0;
  let arr = [];

  for (let i = 0; i < frontCopy.length; i++) {
    temp = current;
    current = Math.max(frontCopy[i] + prev, current);
    prev = temp;
  }
  arr.push(current);

  temp = 0;
  current = 0;
  prev = 0;

  for (let i = 0; i < backCopy.length; i++) {
    temp = current;
    current = Math.max(backCopy[i] + prev, current);
    prev = temp;
  }

  arr.push(current);

  return Math.max(...arr);
};

// Question: https://leetcode.com/problems/house-robber-ii/
