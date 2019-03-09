function insertionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      let prev = array[j - 1]
      array[j - 1] = array[j]
      array[j] = prev
      j--
    }
  }

  return array
}

function insertionSort(array) {
  // Write your code here.
  let sortArr = [array[0]]

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= sortArr[sortArr.length - 1]) {
      sortArr.push(array[i])
    } else {
      let sorted = false
      let curr = array[i]
      while (!sorted) {
        for (let j = 0; j < sortArr.length; j++) {
          if (curr < sortArr[j]) {
            if (j === 0) {
              sortArr = [curr, ...sortArr]
              sorted = true
              break
            } else {
              sortArr = [...sortArr.slice(0, j), curr, ...sortArr.slice(j)]
              sorted = true
              break
            }
          }
        }
      }
    }
  }
  return sortArr
}
