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



function validateBst(tree) {
  // Write your code here.
  let max = tree.value;
  let min = tree.value;

  return validateHelper(tree, max, min)
}

function validateHelper(tree, max, min) {
  if (tree.right) {
    if (tree.right.value >= tree.value && tree.right.value > min) {
      return validateHelper(tree.right)
    } else {
      return false
    }
  } else if (tree.left) {
    if (tree.left.value < tree.value && tree.left.value < max) {
      return validateHelper(tree.left)
    } else {
      return false
    }
  }
  return true
}

let test = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22).insert(13).insert(14)

// test.left.right.right = new BST(11)
validateBst(test)
