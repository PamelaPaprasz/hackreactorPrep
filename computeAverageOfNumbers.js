function computeAverageOfNumbers(nums) {
	var sum = 0;
	if(nums.length > 0){
		for(var i = 0; i < nums.length; i++){
	  		sum += nums[i];
		}
		sum  = sum/nums.length
	}
	return sum;
}

var input = [1,2,3,4,5];
console.log(computeAverageOfNumbers(input));