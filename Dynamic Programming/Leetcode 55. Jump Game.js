// Greedy Algorithm

// Explaination

// It's a typical problem that can be solved by Greedy algorithm, which is an algorithm makes the optimal choice at each step as going forward.

// You will need to iterate over the nums starting from 0 to the last, and keep updating max to record how far you can jump so far.
// max = Math.max(max, idx + nums[idx]);
// And check if the max is greater or equal to the target at each step.

// That's pretty much it!

// But we still can add a bit of optimization by checking an early exit condition when there is no way to move forward.
// If a current value is 0, you cannot jump to the next. But there might be a way to jump farther from the previous step. How can we check that? max again!
// max > idx then we can conclude we can go further from the previous step. Otherwise, it's impossible.

// So the early exit condition is
// if (max <= idx && nums[idx] === 0) { return false; }

var canJump = function (nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);

    if (max >= target) {
      return true;
    }

    if (max <= idx && nums[idx] === 0) {
      return false;
    }

    idx++;
  }

  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
