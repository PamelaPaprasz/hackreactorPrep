function removeStringValuesLongerThan(num, obj) {
  var keys = Object.keys(obj);
  for(var i = 0; i < keys.length; i++){
  	var valueObj = obj[keys[i]];
  	if (typeof valueObj === "string"){
  		if (valueObj.length > num){
  			delete obj[keys[i]]
  		}
  	}
  }
  return obj
}

var myObj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
console.log(removeStringValuesLongerThan(6, myObj));