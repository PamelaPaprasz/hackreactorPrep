// function sumDigits(num) {
// 	var arr = []
//   	var strNum = num.toString();
//   	console.log(strNum.length);
//   	var numFromStr;

//   	for(var i = 0; i < strNum.length; i++){
//   		numFromStr = parseInt(strNum[i])
//   		if(numFromStr !== NaN){
//   			console.log(numFromStr);
//   			arr.push(numFromStr)
//   		}
//   	}
//   	console.log(arr);

//   	var sum = arr.reduce(function(sum, value){
//   		return sum + value;
//   	}, 0);

//   	return sum;
// }
// console.log(sumDigits(-1148));

function sumDigits(num) {
  var isNeg = num < 0,   // check whether the number is negative
      numbers = (isNeg? String(num).slice(1) : String(num)).split('').map(Number);
  if (isNeg) numbers[0] *= -1;   // 'recovering' the number's sign

  return numbers.reduce(function(a,b){ return a + b; });
}
console.log(sumDigits(-1148));