function getElementsAfter(array, n) {
  var sliced = array.slice(n+1);
  return sliced;
  
}
console.log(getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2));