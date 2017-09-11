function getElementsGreaterThan10AtProperty(obj, key) {
	var arr = [];
  	if(key in obj){
  		for(var i = 0; i < key.length; i++){
  			if(obj[key][i] > 10){
  				arr.push(obj[key][i]);
  			}
  		}
  		return arr;
  	}
  	return arr;
}

var obj = {
  key: [1, 20, 30]
};
console.log(getElementsGreaterThan10AtProperty(obj, 'key'));