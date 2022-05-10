// Two Pointer
// Time Complexity O(n)

var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let difference = Math.abs(left - right);
    let minimum = Math.min(height[left], height[right]);
    let currentMax = difference * minimum;

    if (max < currentMax) {
      max = currentMax;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
