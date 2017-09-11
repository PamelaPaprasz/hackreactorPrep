function isOddWithoutModulo(num) {
	if(num === 0){
		return false;
	}

  	var strNum = num.toString();
  	if(strNum[strNum.length-1] == 1 || strNum[strNum.length-1] == 3 || strNum[strNum.length-1] == 5 || strNum[strNum.length-1] == 7 || strNum[strNum.length-1] == 9){
  		console.log(strNum[strNum.length-1]);
    	return true;
  	}return false;
}
console.log(isOddWithoutModulo(-27));