var employees = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];


function transformEmployeeData(array) {
	var finalArray = [];
	var arr;
	var obj;
	for (var i = 0; i<array.length; i++){
		arr = array[i];
		obj = Object.assign(...arr.map(d => ({[d[0]]: d[1]})))
		finalArray.push(obj)
	}
	return finalArray;
}

console.log(transformEmployeeData(employees));

