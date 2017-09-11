function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}
console.log(addToFront([1, 2], 3));