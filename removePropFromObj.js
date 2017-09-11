var flats = {
  name: 'Sam',
  number: 20,
  clean: true
}

function removeProperty(obj, key) {
  delete obj[key]; 
}

removeProperty(flats, 'number')