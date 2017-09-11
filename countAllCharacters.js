function countAllCharacters(str) {
  var arr = []
  for(var i = 0; i<str.length; i++){
    arr.push(str[i]);
  }
  console.log(arr);
  var countedLetters = arr.reduce(function (allLetters, letter) { 
    if (letter in allLetters) {
      allLetters[letter]++;
    }
    else {
      allLetters[letter] = 1;
    }
    return allLetters;
  }, {});
  return countedLetters;
}
console.log(countAllCharacters('banana'));