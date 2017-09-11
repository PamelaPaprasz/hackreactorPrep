function getAllButLastElementOfProperty(obj, key) {
  if( key in obj && Array.isArray(obj[key]) && obj[key].length > 1){
    return obj[key].slice(0, -1);;
  }
  return [];
}

var obj = {
  key: [1, 2, 3]
};

console.log(getAllButLastElementOfProperty(obj, 'key'));