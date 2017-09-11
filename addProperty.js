var flats = {
  number: 20
}

function addProperty(obj, key) {
  return obj[key] = true;
}

addProperty(flats, "clean")

console.log(flats)