function findShortestWordAmongMixedElements(arr) {
  var str;
  var shortest = "";
  arr.forEach((el) => {
    if(typeof el === "string"){
      str = el;
      if(shortest === ""){
        shortest = str;
        console.log(shortest, "1");
      }
      if(shortest.length > str.length){
        console.log(str, "str");
        shortest = str;
        console.log(shortest, "2");
      }
    }
  })
  return shortest;
}
console.log(findShortestWordAmongMixedElements([4, 'two', 2, 'three']));