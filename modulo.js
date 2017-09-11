// function modulo(num1, num2) {
  
//   if(num1 === 0){
//     return 0;
//   }
//   if(num2 === 0){
//     return NaN;
//   }
//   if(isNaN(num1) || isNaN(num2)){
//     return NaN;
//   }
  
//   var devided = Math.floor(num1/num2);
//   var modulo = num1;

//   if(num1 < 0 || num2 < 0){
//     for(var i = devided; i < 0; i++){
//       modulo = modulo + num2;
//     }
//   }

//   if(num1 > 0){
//     for(var j = 0; j < devided; j++){
//       modulo = modulo - num2;
//     }
//   }
//   return modulo;
// }
// console.log(modulo(-4, 2));




function modulo(num1, num2) {
  
  if(num1 === 0){
    return 0;
  }
  if(num2 === 0){
    return NaN;
  }
  if(isNaN(num1) || isNaN(num2)){
    return NaN;
  }
  
  var devided = num1 / num2;

  if(devided.toString().indexOf(".") === -1){
    return 0;
  }
  var floored = Math.floor(num1/num2);
  var modulo = num1;

  if(num1 < 0 || num2 < 0){
    for(var i = floored; i < -1; i++){
      modulo = modulo + num2;
    }
  }

  if(num1 > 0){
    for(var j = 0; j < floored; j++){
      modulo = modulo - num2;
    }
  }
  return modulo;
}
console.log(modulo(-25, 4));




// function modulo(num1, num2) {

//   var decimals;
//   var devided;
  
//   if(num1 === 0){
//     return 0;
//   }
//   if(num2 === 0){
//     return NaN;
//   }
//   if(isNaN(num1) || isNaN(num2)){
//     return NaN;
//   }
  
//   devided = num1/num2;

//   if(num1 > 0 || num2 > 0){
//     decimals = devided - Math.floor(devided);
//   }

//   if(num1 < 0 || num2 < 0){
//     decimals = devided - Math.floor(devided);
//     console.log(decimals);
//   }
  

//   if(decimals !== 0){
//     return decimals * num2;
//   }return decimals;

// }
// console.log(modulo(-25, -4));

