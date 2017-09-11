function computeProductOfAllElements(arr) {
  if(arr.length === 0){
    return 0;
  }
  var total = arr.reduce(function(sum, el) {
    return sum * el;
  });
  return total;
}
console.log(computeProductOfAllElements([2, 5, 6, 2, 9, 5, 8, 1]));