"use strict"

function isNumber(value) {
  
  let isNotNumber = (isNaN(value) || typeof value != "number");
    
  if (isNotNumber) {
    throw new Error ('parameter type is not a Number');
  }
  else {
    return true;
  }
}

function isEven(num) {
  let result = (isNumber(num) && num % 2 == 0) ? true : false;
  return result;
}
