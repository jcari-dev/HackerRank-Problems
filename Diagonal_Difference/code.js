function diagonalDifference(arr) {
  
  let reducer = (a, b) => (a + b)
  
  
  let l = arr.length
  let arrsum = []
  let arrsum2 = []
  let sum1 = 0
  let sum2 = 0
  
    for(let x = 0; x < l; x++){
      for(let y = 0; y < l; y++){
        if(x == y){
          arrsum.push(arr[x][y])
        }
        if(x + y == arr.length - 1){
          arrsum2.push(arr[x][y])
        }
      }
    }
  
  sum1 = arrsum.reduce(reducer)
  sum2 = arrsum2.reduce(reducer)


  return Math.abs(sum1-sum2)

}
