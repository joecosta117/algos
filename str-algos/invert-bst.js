function invertBinaryTree(tree) {
  if (tree === null) return
  swapLeftRight(tree)
  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}

function swapLeftRight(tree) {
  let currLeft = tree.left
  tree.left = tree.right
  tree.right = currLeft
}

invertBinaryTree(test)
