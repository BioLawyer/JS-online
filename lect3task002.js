"use strict"

function f() {
  
  if (arguments.length == 0) {
    throw new Error ('No arguments were passed');
  }
  
  else {
    let sum = 0;
    
    for (let arg of arguments) {
      
      if (String(arg) == 'NaN' || typeof arg != 'number') {
        throw new Error ('all parameters type should be a Number');
      }
      
      else {
        sum += arg;
      }
    }
    
    return sum;
  }
}