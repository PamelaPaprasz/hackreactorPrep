const customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
	for (let customer in customerData) {
    if (firstName === customer) {
      if (customerData[firstName].visits > 1) {
       greeting = 'Welcome back, ' + firstName +  '! So glad to see you again!'
      } 
      if (customerData[firstName].visits === 1) {
       greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!"
      }
      return greeting
    } else { 
      greeting = 'Welcome! Is this your first time?'
    }
	}
  return greeting;
}
console.log(greetCustomer('Terrance'))
console.log(greetCustomer('Joe'))
console.log(greetCustomer('Carrie'))