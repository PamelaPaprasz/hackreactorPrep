function getFirstElementOfProperty(obj, key) {
  if(Array.isArray(obj[key]) && obj[key].length > 0){
    return obj[key][0];
  }
  return undefined;
}

var obj = {
  key: [1, 2, 4]
};

console.log(getFirstElementOfProperty(obj, 'key'));