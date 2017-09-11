// it is bad

// function getLengthOfLongestElement(arr) {
//   var longest = 0;
//   for(var i = 0; i < arr.length-1; i++){
//   	longest = arr[0].length;
//     if(arr[i].length < arr[i+1].length){
//       longest = arr[i+1].length
//     }
//   }
//   return longest;
// }
// console.log(getLengthOfLongestElement(['one', 'gdhgsgagaajk', 'two', 'three']));



// it is working well but do not handles ties


// function getLengthOfLongestElement(arr) {
// 	var longest = 0;
// 	if(arr.length > 0){
// 	  	for(var i = 0; i < arr.length-1; i++){
// 	    	var long = arr[0].length;
// 	    	if(arr[i].length < arr[i+1].length){
// 	      		long = arr[i+1].length
// 	      		if(long > longest){
// 	        		longest = long
// 	      		}
// 	    	}
// 	  	}
// 	}
//   	return longest;
// }
// console.log(getLengthOfLongestElement(['one', 'ugwdhdhgdi', 'two', 'three']));




// it handles ties too


function getLengthOfLongestElement(arr) {
  var numArr = [];
  
  if(arr.length < 1){
    return 0;
  }else{
    for(var i = 0; i < arr.length; i++){
      numArr.push(arr[i].length)
    }
    var max = numArr.reduce(function(a, b) {
      return Math.max(a, b);
    });
    return max;
  }
}
console.log(getLengthOfLongestElement(['one', 'two', 'three']));