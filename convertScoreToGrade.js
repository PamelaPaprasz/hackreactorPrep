function convertScoreToGrade(score) {
  
  if(score < 0 || score > 100){
    return "INVALID SCORE";
  }else if(100 >= score && score >= 90){
    return "A";
  }else if(89 >= score && score >= 80){
    return "B";
  }else if(79 >= score && score >= 70){
    return "C";
  }else if(69 >= score && score >= 60){
    return "D";
  }else if(59 >= score && score >= 0){
    return "F";
  }
}
console.log(convertScoreToGrade(91));