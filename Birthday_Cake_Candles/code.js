
function birthdayCakeCandles(candles) {

    let hold = null
    let count = 0


    for (let x = 0; x < candles.length; x++) {

      if (candles[x] > hold) {
            
                hold = candles[x]

        } 




    }

  let result = candles.filter(repeatCount => repeatCount === hold)
  
  return result.length

}
