"use strict"

function f(arr) {
  
  if (arr.length == 0) {
    throw new Error('Array should not be empty');
  }
  
  else {
    console.log( arr.shift() );
    
    if (arr.length > 0) {
      f(arr);
    }
  }
}