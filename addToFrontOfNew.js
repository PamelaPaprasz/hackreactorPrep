function addToFrontOfNew(arr, element) {
  
  var newArr = [];
  var finalArr = [];
  
  for(var i = 0; i < arr.length; i++){
  	newArr.push(arr[i]);
  }
  
  newArr.unshift(element);
  
  for(var j = 0; j < newArr.length; j++){
  	finalArr.push(newArr[j]);
  }
  return finalArr;
}

var input = [1, 2];

console.log(addToFrontOfNew(input, 3));