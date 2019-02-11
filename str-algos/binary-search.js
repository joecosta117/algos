function binarySearch(array, target) {
  let pointer = Math.floor(array.length / 2)
  while (pointer > -1 || pointer < array.length) {
    if (array[pointer] === target) {
      return pointer
    } else if (array[pointer] > target) {
      pointer--
    } else {
      pointer++
    }
  }
  return -1
}

//simpler but more time complex method
// function binarySearch(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i
//     }
//   }
//   return -1
// }

let arr = [15,18,22,25,28, 30, 35,40]
binarySearch(arr, 22)
