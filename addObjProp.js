var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};

var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};


function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
  return obj1;
}
addObjectProperty(person1, "manager", person2)

console.log(person1)
