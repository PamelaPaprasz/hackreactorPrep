var firstObj = {
  a: 1,
  b: 2
};
var secondObj = {
  b: 4,
  c: 3
};


function extend(obj1, obj2) {

	var sizeObj1 = Object.keys(obj1).length;
	var sizeObj2 = Object.keys(obj2).length;
	var keysObj1 = Object.keys(obj1);
	var keysObj2 = Object.keys(obj2);
	var actualValue;

	for (var i = 0; i < sizeObj1; i++){
		for(var j = 0; j < sizeObj2; j++){
			if (keysObj1.indexOf(keysObj2[j]) === -1){
				actualValue = obj2[keysObj2[j]];
				obj1[Object.keys(obj2)[j]] = actualValue;
			}
		}
	}
  	return obj1;
}
console.log(extend(firstObj, secondObj));