function removeEvenValues(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i<keys.length; i++){
    var objValue = obj[keys[i]];
    if (objValue %2 === 0){
      console.log(objValue)
      console.log(obj[keys[i]])
      delete obj[keys[i]]
    }
  }
  return obj;
}

var obj = {
  a: 2,
  b: 3,
  c: 4
};
console.log(removeEvenValues(obj));