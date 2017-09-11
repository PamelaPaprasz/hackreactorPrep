var objToArr = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};

function convertObjectToList(obj) {
	var finalArr = [];
	for(var prop in obj){
		var listFromObj = [prop, obj[prop]];
		finalArr.push(listFromObj);
	}
	return finalArr;
}

console.log(convertObjectToList(objToArr))