function convertScoreToGradeWithPlusAndMinus(score) {
  if(score < 0 || score > 100){
    return "INVALID SCORE";
  }else if(100 >= score && score >= 90){
    if(92 >= score && score >= 90){
      return "A-";
    }else if(100 >= score && score >= 98){
      return "A+";
    }return "A";
  }else if(89 >= score && score >= 80){
    if(82 >= score && score >= 80){
      return "B-";
    }else if(89 >= score && score >= 88){
      return "B+";
    }return "B";
  }else if(79 >= score && score >= 70){
    if(72 >= score && score >= 70){
      return "C-"
    }else if(79 >= score && score >= 78){
      return "C+";
    }return "C";
  }else if(69 >= score && score >= 60){
    if(62 >= score && score >= 60){
      return "D-"
    }else if(69 >= score && score >= 68){
      return "D+";
    }return "D";
  }else if(59 >= score && score >= 0){
    return "F";
  }
}
console.log(convertScoreToGradeWithPlusAndMinus(98));