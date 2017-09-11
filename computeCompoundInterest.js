function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  
  var base = 1+ interestRate/compoundingFrequency;
  var pow = compoundingFrequency * timeInYears;
  var powBase = Math.pow(base, pow);
  var amount = principal * powBase - principal;
  return amount;
}
console.log(computeCompoundInterest(1500, .043, 4, 6));