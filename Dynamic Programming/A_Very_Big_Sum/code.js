function aVeryBigSum(ar) {
  
    let reducer = (a, b) => (a + b)
    
    ar = ar.reduce(reducer)
    
    return ar

}
