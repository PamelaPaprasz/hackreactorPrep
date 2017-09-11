function getOddLengthWordsAtProperty(obj, key) {
  var arr = [];
  if(Array.isArray(obj[key]) && obj[key].length > 0){
    for(var i = 0; i < obj[key].length; i++){
      if(obj[key][i].length %2 === 1){
        arr.push(obj[key][i])
      }
    }
  }
  return arr;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};

console.log(getOddLengthWordsAtProperty(obj, 'key'));