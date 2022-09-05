var permute = function (nums) {
  const ans = [];

  const bfs = (selected) => {
    if (selected.length === nums.length) {
      ans.push(selected);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!selected.includes(nums[i])) {
        bfs([...selected, nums[i]]);
      }
    }
  };

  bfs([]);

  return ans;
};

console.log(permute([1, 2, 3])); // [[ 1, 2, 3 ],[ 1, 3, 2 ],[ 2, 1, 3 ],[ 2, 3, 1 ],[ 3, 1, 2 ],[ 3, 2, 1 ]]
