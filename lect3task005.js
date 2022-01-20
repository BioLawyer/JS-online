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

function isPositive(num) {
  let result = (isNumber(num) && num > 0) ? true : false;
  return result;
}

function getPosArr(arr) {
  let posArr = [];

  for (let elem of arr) {
    if ( isPositive(elem) ) {
      posArr.push(elem);
    }
  }

  return posArr;
}

getPosArr( [1, 2, -4, 3, -9, -1, 7] );


