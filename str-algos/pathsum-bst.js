class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value === value) {
      if (this.right) {
        let newRight = this.right
        this.right = new BST(value)
        this.right.right = newRight
      } else {
        this.right = new BST(value)
      }
    } else if (this.value > value) {
      if (this.left) {
        this.left.insert(value)
      } else {
        this.left = new BST(value)
      }
    } else {
      if (this.right) {
        this.right.insert(value)
      } else {
        this.right = new BST(value)
      }
    }
    return this;
  }
}

function pathSum(tree, target) {
  if (tree === null) return false
  if (!tree.left && !tree.right && tree.value === target) return true
  return pathSum(tree.left, target - tree.value) || pathSum(tree.right, target - tree.value)
}

let test = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22).insert(13).insert(14)

//pathSum(test, 18) should return true because it goes from 10 -> 5 -> 2 -> 1. this checks if the target value is the total of BST from root to leaf
