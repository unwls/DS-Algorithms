// Recursive Solution

// Iterative Solution
var isValidBST = function (root) {
  if (root == null) return true;

  const stack = [];
  let pre = null;

  while (root != null || !stack.length) {
    while (root != null) {
      stack.push(root);
      root = root.left; 
    }

    root = stack.pop();

    if (pre != null && root.val <= pre.val) {
      return false;
    }

    pre = root;
    root = root.right;
  }

  return true;
};
