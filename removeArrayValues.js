function removeArrayValues(obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++){
    var objValue = obj[keys[i]];
    if (objValue.constructor === Array){
      delete obj[keys[i]];
    }
  }
  return obj;
}

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
console.log(removeArrayValues(obj));