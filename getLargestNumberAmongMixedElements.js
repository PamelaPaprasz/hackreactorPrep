function getLargestNumberAmongMixedElements(arr) { 
  var largestNum;
  var count = 0;
  var num;
  if(arr.length > 0){
    arr.forEach((el) => {
      if(typeof el === "number"){
        count++
        num = el;
        if(largestNum === undefined){
          largestNum = num;
        }

        if(num > largestNum){
          largestNum = num;
        }
      }
    })
  }
  if(count === 0){
    return count;
  }
  return largestNum;
}
console.log(getLargestNumberAmongMixedElements([-3, 'word', -5, 'up', -3, -1]));