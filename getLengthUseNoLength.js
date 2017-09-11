function getStringLength(string) {
  var count = 0;
  var index = 0;

  while(string[index] !== undefined){
    count += 1;
    index += 1;
  }
  return count;
}
console.log(getStringLength('hello'));