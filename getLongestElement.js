function getLongestElement(arr) {
  if(arr.length === 0){
    return "";
  }
  
  var longest = arr[0];
  var long;
  for(var i = 0; i < arr.length-1; i++){
    if(arr[i].length < arr[i+1].length){
      long = arr[i+1];
      if(long.length > longest.length){
        longest = long;
      }
    }
  }
  return longest;
}
console.log(getLongestElement(['one', 'two', 'three']));