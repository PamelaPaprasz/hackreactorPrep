function assertArraysEqual(actual, expected, testName) {
	var count = 0;
	for(var i = 0; i < actual.length; i++){
		if(actual[i] === expected[i]){
			count++
		}else{
			console.log(testName + "FAILED");
		}
	}
	console.log(testName + " test passed");
}

function splitStrToArr(str) {
	var splitedStr;
  	return splitedStr = str.split("");
}
var output = splitStrToArr("broken"); 

assertArraysEqual(output, ['b', 'r', 'o', 'k', 'e', 'n'], 'it splits string into array');