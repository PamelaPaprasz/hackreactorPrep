var customerData = {
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

  var greeting = 'Welcome! Is this your first time?';
  // var checkerList = [];

  for (var key of Object.keys(customerData)) {
    // checkerList.push(key)
    // console.log(key);

    if (key === firstName){
      if (customerData[key].visits === 1){
        greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!"
      } else if(customerData[key].visits > 1){
        greeting = "Welcome back, " + firstName + "! So glad to see you again!"
      }   
    return greeting;
    }
  }
  return greeting;
}

console.log(greetCustomer('Howard'))

