function findThreeLargestNumbers(array) {
  let topThree = []
  let lowest
  for (let i = 0; i < array.length; i++) {
    if (topThree.length < 3) {
      topThree.push(array[i])
    } else {
      topThree.sort((a,b) => a -b)
      if (array[i] > topThree[0]) {
        topThree[0] = array[i]
      }
    }
  }
  return topThree.sort((a,b) => a - b)
}

let arr = [7,8,3,11,43,55]
findThreeLargestNumbers(arr)
//should return [11,43,55]
