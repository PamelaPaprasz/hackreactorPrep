function convertDoubleSpaceToSingle(str) {
	var strToArr = str.split(" ");
	for(var i = 0; i < strToArr.length; i++){
		if(strToArr[i].length === 0){
			strToArr.splice(i, 1);
		}
	}
	var backToStr = strToArr.join(" ");
	return backToStr;
}
console.log(convertDoubleSpaceToSingle("string  with  double  spaces"));