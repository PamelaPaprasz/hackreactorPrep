function getLengthOfShortestElement(arr) {
  
  if(arr.length === 0){
    return 0;
  }
  var shortest = arr[0].length;
  var short;
  for(var i = 0; i < arr.length-1; i++){
    if(arr[i].length <= arr[i+1].length){
      short = arr[i].length;
      if(short < shortest){
        shortest = short;
      }
    }
  }
  return shortest;
}
console.log(getLengthOfShortestElement(['one', 'three', 'two']));