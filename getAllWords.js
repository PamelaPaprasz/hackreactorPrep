function getAllWords(str) {
  if(str.length > 0){
    return str.split(" ");
  }return [];
}
getAllWords('Radagast the Brown');