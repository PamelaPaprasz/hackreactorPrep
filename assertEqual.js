function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
    
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    
  }
}

function multiplyByTwo(n) {
  return n * 2;
}
var output = multiplyByTwo(2); 

assertEqual(output, 4, 'it doubles 2 to 4');