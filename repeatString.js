function repeatString(string, num) {
	var repeatedStr = string;
	for(var i = 1; i < num; i++){
		repeatedStr += string;
	}
  	return repeatedStr;
}
console.log(repeatString('code', 3));