"use strict"

function isValid(value) {
  
  let isNotNumber = (isNaN(value) || typeof value != "number");
  let isZero = (value === 0) ? true : false;
    
  if (isNotNumber) {
    throw new Error ('parameter type is not a Number');
  }
  else if (isZero){
    throw new Error ('parameter can\'t be a 0');
  }  
  else {
    return true;
  }
}

function f(num) {
  if ( isValid(num) ){
    let divisors = [];
    
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    
    return divisors;
  }
}