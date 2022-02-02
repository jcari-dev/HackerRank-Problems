function plusMinus(arr) {

  let l = arr.length
  let p = 0
  let n = 0
  let z = 0

  let response = []


  for (let x = 0; x < arr.length; x++) {

    if (arr[x] == 0) {
      z++
    } else if (arr[x] < 0) {
      n++
    } else {
      p++
    }
  }

  response = [p / l, n / l, z / l].join("\r\n")

  console.log(response)
  return response


}
