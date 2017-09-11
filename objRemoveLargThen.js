var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}

function removeNumbersLargerThan(num, obj) {

  var lengthObj = Object.keys(obj).length;
  var keys = Object.keys(obj);
  var valueObj;

  for (var i = 0; i < lengthObj; i++){
  	valueObj = obj[keys[i]];
  	if(typeof valueObj === 'number'){
  		if (valueObj > num){
  			delete obj[keys[i]]
  		}
  	}
  }
  return obj
}
console.log(removeNumbersLargerThan(5, obj));