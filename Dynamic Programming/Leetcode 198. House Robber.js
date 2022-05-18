var rob = function (nums) {
  let temp = 0;
  let current = 0;
  let prev = 0;

  for (let i = 0; i < nums.length; i++) {
    temp = current;
    current = Math.max(prev + nums[i], temp);
    prev = temp;
  }

  return current;
};
