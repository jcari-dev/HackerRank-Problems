function compareTriplets(a, b) {
  
    let l = a.length + b.length / 2
    let bob = 0
    let alice = 0
    
    for (let x = 0; x < l; x++){
      if(a[x] > b[x]){
        alice += 1
      } else if (a[x] < b[x]){
        bob += 1
      } else {
        
      }
    }

  return [alice, bob]
  
}