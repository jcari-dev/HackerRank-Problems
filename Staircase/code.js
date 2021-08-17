function staircase(n) {

  let hash = "#"
  let space = ' '
  let spaceNum = n-1
  let hashNum = 1
  for (let x = 0; x < n; x++) {

    console.log(space.repeat(spaceNum) + hash.repeat(hashNum))
    spaceNum--
    hashNum++

  }

}
