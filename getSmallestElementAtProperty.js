function getSmallestElementAtProperty(obj, key) {
  var shortest = 0;
  if(key in obj && obj[key].length > 0 && Array.isArray(obj[key])){
    var short = obj[key][0];
    for(var i = 0; i < obj[key].length-1; i++){
      if(obj[key][i] > obj[key][i+1]){
        shortest = obj[key][i+1];
        if(obj[key][i+1] < short){
          short = obj[key][i+1]
        }
      }
    }
    return short;
  }
  return undefined
}

var obj = {
  key: [1, 4, 2, 1, 5]
};

console.log(getSmallestElementAtProperty(obj, 'key'));