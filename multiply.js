function multiply(num1, num2) {
	var multiple = 0

	if(num2 > 0){
		for(var i = 0; i < num2; i++){
			multiple += num1
		}
		return multiple;
	}

	if(num2 <= 0){
		for(var j = num2; j < 0; j++){
			multiple += num1
		}
		if(num1 > 0){
			return -multiple;
		}
		return multiple;
		
	}
}
console.log(multiply(4, -7));