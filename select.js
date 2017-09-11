function select(arr, obj) {

	var newObj = {};
	for(var i = 0; i < arr.length; i++){
  		if(arr[i] in obj){
  			newObj[arr[i]] = obj[arr[i]];
  		}
	}
  	return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
	a: 1,
  	b: 2,
  	c: 3,
  	d: 4
};

console.log(select(arr, obj));