"use strict"

function f(n1, n2, n3) {
  for (let arg of arguments) {
    if (String(arg) == 'NaN' || typeof arg != 'number') {
      throw new Error ('all parameters type should be a Number');
    }
  }
  
  return (n1 - n2) / n3;
}
