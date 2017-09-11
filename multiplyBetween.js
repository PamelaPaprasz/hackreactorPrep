function multiplyBetween(num1, num2) {

	var mult = 1;
  	for(var i = num1; i < num2; i++){
    	mult *= i;
  	}
  	return mult;
}
console.log(multiplyBetween(2, 5));