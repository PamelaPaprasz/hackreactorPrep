function countWords(str) {

  if (str.length > 0){
    var arr = str.split(" ");

    var countedWords = arr.reduce(function (allWords, word){
      if (word in allWords){
        allWords[word]++;
      }
      else{
        allWords[word] = 1;
      }
      return allWords;
    }, {});
    return countedWords;
  }
  else{
    return ({});
  }
};

console.log(countWords('ask a bunch get a bunch'));



