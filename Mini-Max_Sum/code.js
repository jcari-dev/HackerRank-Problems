function miniMaxSum(arr) {
  // Write your code here

  arr = new Float64Array(arr);

  arr.sort();

  let minSum = arr.slice(0, 4).reduce((a, b) => a + b, 0);
  
  let maxSum = arr.slice(arr.length - 4).reduce((a, b) => a + b, 0);

//   console.log(minSum, maxSum);


  return maxSum, minSum;
}
