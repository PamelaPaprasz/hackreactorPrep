function removeNumbersLessThan(num, obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++){
  	var valueObj = obj[keys[i]];
    console.log(valueObj)
  	if(typeof valueObj === 'number'){
  		if (valueObj < num){
  			delete obj[keys[i]]
  		}
  	}
  }
  return obj
}

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
console.log(removeNumbersLessThan(5, obj));