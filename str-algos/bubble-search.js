function bubbleSort(array) {
  let swaps = true

  while (swaps) {
    swaps = false

    for (let i = 0; i < array.length; i++) {
      let curr = array[i]
      let next = array[i + 1]
      if (curr > next) {
        array[i] = next
        array[i + 1] = curr
        swaps = true
      }
    }
  }
  return array
}
