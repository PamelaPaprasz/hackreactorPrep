function getSquaredElementsAtProperty(obj, key) {
  var squared = [];
  if(Array.isArray(obj[key]) && obj[key].length > 0){
    for(var i = 0; i < obj[key].length; i++){
      squared.push(obj[key][i] * obj[key][i])
    }
  }
  return squared;
}

var obj = {
  key: [2, 1, 5]
};

console.log(getSquaredElementsAtProperty(obj, 'key'));