function assertObjectsEqual(actual, expected, testName) {
	if(JSON.stringify(actual) === JSON.stringify(expected)){
		return true;
	}return false;
}

var e = {foo: 5, bar: 6};
var a = {foo: 5, bar: 6}
console.log(assertObjectsEqual(a, e, 'detects that two objects are equal'));