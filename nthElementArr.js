var arr = [1, 2, 3, 4, 5, 6]

function getNthElement(array, n) {
  
  var nthElement = array.splice(n, 1);
  var ddd = nthElement.toString();
  var dddNumb = parseInt(ddd)
  
  if(array.length === 0){
    return undefined;
  }else{
    return dddNumb;
  }
}
console.log(getNthElement(arr, 2));