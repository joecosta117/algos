//construct BST with insert, search, and remove
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
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

  contains(value) {
    // Write your code here.
    if (this.value === value) {
      return true
    } else if (this.value < value) {
      if (this.right) {
        return this.right.contains(value)
      } else {
        return false
      }
    } else if (this.value > value) {
      if (this.left) {
        return this.left.contains(value)
      } else {
        return false
      }
    }
  }

  remove(value, parent = null) {
    // Write your code here.
    // Do not edit the return statement of this method.
    if (this.value < value) {
      if (this.right) {
        this.right.remove(value, this)
      }
    } else if (this.value > value) {
      if (this.left) {
        this.left.remove(value, this)
      }
    } else {

      if (this.left && this.right) {
        console.log("if equals", this.value)
        this.value = this.right.getMin()
        console.log(this.value)
        this.right.remove(this.value, this)
      } else if (parent === null) {
        debugger
        if (this.left) {
          this.value = this.left.value
          this.right = this.left.right
          this.left = this.left.left
        } else if (this.right) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        } else {
          this.value = null
        }
      } else if (parent.left) {
        if (this.left) {
          parent.left = this.left
        } else if (this.right) {
          parent.left = this.right
        } else {
          this.value = null
        }
      } else if (parent.right === this) {
        if (this.left) {
          parent.right = this.left
        } else if (this.right) {
          parent.right = this.right
        } else {
          this.value = null
        }
      }
    }
    return this;
  }

  getMin() {
    if (this.left) {
      return this.left.getMin()
    } else {
      return this.value
    }
  }
}
