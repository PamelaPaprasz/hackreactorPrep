function getLargestElementAtProperty(obj, key) {
  var largest = 0;
  if(key in obj && Array.isArray(obj[key]) && obj[key].length > 0){
    var larg = obj[key][0];
    for(var i = 0; i < obj[key].length-1; i++){
      if(obj[key][i] < obj[key][i+1]){
        larg = obj[key][i+1];
        if(larg > largest){
          largest = larg;
        }
      }
    }
    return largest;
  }
  return undefined;
}

var obj = {
  key: [1, 8, 2, 4, 3]
};

console.log(getLargestElementAtProperty(obj, 'key'));