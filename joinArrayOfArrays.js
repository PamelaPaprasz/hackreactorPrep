// it is ok too

// function joinArrayOfArrays(arr) {
//   var merged = [].concat.apply([], arr);
//   return merged;
// }
// console.log(joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]));




function joinArrayOfArrays(arr) {
  return arrays = arr.reduce((a, b) => a.concat(b), []);
}
console.log(joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]));
