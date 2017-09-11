// function filterEvenLengthWords(words) {
//   	for(let i = 0; i < words.length; i++){
//   		console.log(i);
//   		// console.log(words.length);
//     	if(words[i].length %2 === 1){
//     		console.log(words[i].length);
//       		words.splice(i, 1)
//     	}
//   	}
//   	return words;
// }
// console.log(filterEvenLengthWords(['words', 'words', 'word', 'words']));

// function filterEvenLengthWords(words) {
//   	var newArr = words.map(function(word){
//   		if(word.length %2 === 0){
//   			return word;
//   		}
//   	});
//   	return newArr;
// }
// console.log(filterEvenLengthWords(['words', 'words', 'word', 'words']));


function filterEvenLengthWords(words) {
	var arr = [];
  	words.forEach(function(word){
  		if(word.length %2 === 0){
  			arr.push(word);
  		}
  	});
  	return arr;
}
console.log(filterEvenLengthWords(['word', 'words', 'now', 'word', 'words']));