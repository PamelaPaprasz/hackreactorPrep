var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

function addFullNameProperty(obj) {
	var full = obj.fullName = obj.firstName + " " + obj.lastName;
  	return full;
}
addFullNameProperty(person)

console.log(person)



