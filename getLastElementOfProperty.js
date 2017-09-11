function getLastElementOfProperty(obj, key) {
  if(Array.isArray(obj[key]) && obj[key].length > 0){
    return obj[key][obj[key].length -1];
  }
  return undefined;
}

var obj = {
  key: [1, 2, 5]
};

console.log(getLastElementOfProperty(obj, 'key'));