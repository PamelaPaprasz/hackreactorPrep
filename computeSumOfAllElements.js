function computeSumOfAllElements(arr) {
  return arr.reduce(
    (a, b) =>{
      return a + b;
    }, 0
  )
}
console.log(computeSumOfAllElements([1, 2, 3]));