"use strict"

function f(num) {
  if (String(num) == 'NaN' || typeof num != "number") {
    throw new Error ('parameter type is not a Number');
  }
  else {
    return num * num * num;
  }
}