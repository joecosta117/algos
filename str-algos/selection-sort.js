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

//better time complexity below:
function selectionSort(array) {
  // Write your code here.
  let curMin = 0;
  let curItem = 0;
  let curr;


  while (curItem < array.length) {
    curr = array[curItem]
    curMin = curItem
    for (let i = curItem + 1; i < array.length; i++) {
      if (array[i] < array[curMin]) {
        curMin = i
      }
    }
    if (array[curMin] !== curr) {
      array[curItem] = array[curMin]
      array[curMin] = curr
    }
    curItem++
  }
  return array
}

