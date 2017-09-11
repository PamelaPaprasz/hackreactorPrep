
function square(n) {
	var squaredN = n * n;
  	return squaredN;
}

function assertEqual(actual, expected, testName) {
  	if(actual === expected){
  		console.log('passed');
  	}else{
  		console.log('failed');
  	}
}

var output = square(5)
assertEqual(output, 25, 'it should square the given number')