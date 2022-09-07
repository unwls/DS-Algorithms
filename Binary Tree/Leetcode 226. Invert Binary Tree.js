var invertTree = function (root) {
  if (!root) return root;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  return root;
};

// Question: https://leetcode.com/problems/invert-binary-tree/
