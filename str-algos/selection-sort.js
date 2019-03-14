function selectionSort(array) {
  // Write your code here.
  let curMin;
  let curItem;
  let curMinIdx;

  for (let i = 0; i < array.length; i++) {
    curMin = array[i]
    curItem = array[i]

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < curMin) {
        curMin = array[j]
        curMinIdx = j
      }
      if (j === array.length - 1 && curMin !== curItem) {
        array[i] = curMin
        array[curMinIdx] = curItem
      }
    }
  }
  return array
}

