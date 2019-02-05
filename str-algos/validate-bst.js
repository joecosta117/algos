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
  const max = Infinity
  const min = -Infinity

  return validateHelper(tree, min, max)
}

function validateHelper(tree, min, max) {
  if (tree === null) return true
  if (tree.value < min || tree.value >= max) return false
  let left = validateHelper(tree.left, min, tree.value)
  return left && validateHelper(tree.right, tree.value, max)
}

let test = new BST(10).insert(5).insert(15).insert(5).insert(2).insert(1).insert(22).insert(13).insert(14)

// test.left.right.right = new BST(11)
validateBst(test)
