function assertWithinRange(low, high, actual, testName) {
  if(low <= actual <= high){
  	console.log("passed");
  }else{
  	console.log("failed");
  }
}

var blackjackScore = 20;
assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');