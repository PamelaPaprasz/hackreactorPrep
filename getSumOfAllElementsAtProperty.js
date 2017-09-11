function getSumOfAllElementsAtProperty(obj, key) {
  if(key in obj && Array.isArray(obj[key]) && obj[key].length > 0){
    var sum = obj[key].reduce((a, b) =>{
      return a + b;
    });
    return sum;
  }
  return 0;
}

var obj = {
  key: [4, 1, 8]
};

console.log(getSumOfAllElementsAtProperty(obj, 'key'));