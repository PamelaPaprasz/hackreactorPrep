function getLongestWordOfMixedElements(arr) {
  var longest = "";
  var str;
  if(arr.length > 0){
    arr.forEach((el) => {
      if(typeof el === "string"){
        str = el;
        if(str.length > longest.length){
          longest = str;
        }
      }
    })
  }
  return longest;
}
console.log(getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]));