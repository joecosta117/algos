//Underscorify Substring
//takes in a string and substring.
//returns version of string with every instance of substring wrapped
//in underscores. if two substrings overlap each other, then underscores should
//only appear on the left and right of the combined substrings.
//if there are no substrings, return the original string

//ex: underscorify("testthis is a testtest to see if testestest works")
//expected: "_test_this is a _testtest_ to see if _testestest_ works"

//attempt:
function createIndexArr(str, sub) {
  let indices = []
  const subLength = sub.length - 1

  for (let i = 0; i < str.length; i++) {
    if (str.startsWith(sub, i)) {
      indices.push(i, i + subLength)
    }
  }

  uniqIdx = [...new Set(indices)]
  // console.log("OG, ", uniqIdx)

  for (let i = 0; i < uniqIdx.length; i++) {
    if (uniqIdx[i + 1] - uniqIdx[i] === 1) {
      uniqIdx.splice(i, 1)
      i--
    } else if (uniqIdx[i] - uniqIdx[i - 1] === subLength + 1) {
      // console.log(uniqIdx[i] - uniqIdx[i - 1])
      uniqIdx.splice(i, 1)
    }
  }



  for (let i = 0; i < uniqIdx.length; i++) {
    if (i > 0) {
      if (uniqIdx[i] - uniqIdx[i - 1] === subLength && uniqIdx[i + 1] - uniqIdx[i] === subLength) {
        let elim = [i]
        let x = i
        while (uniqIdx.length) {
          x++
          if (uniqIdx[x + 1] - uniqIdx[x] === subLength) {
            elim.push(x)
          } else {
            break
          }
        }
        uniqIdx = uniqIdx.slice(0, i).concat(uniqIdx.slice(x))
      }
    }
  }
  // console.log(uniqIdx)
  return uniqIdx
}


function underscorifySubstring(str, sub) {
  let final = ""
  const subLength = sub.length - 1

  let uniqIdx = createIndexArr(str, sub)

  let start = 0
  let end = 0
  for (let i = 0; i < str.length; i++) {
    if (uniqIdx.includes(i) && uniqIdx.indexOf(i) % 2 === 1) {
      final = final.concat(`${str[i]}_`)
    } else if (uniqIdx.includes(i) && uniqIdx.indexOf(i) % 2 === 0) {
      final = final.concat(`_${str[i]}`)
    } else {
      final = final.concat(str[i])
    }
  }
  return final
}
