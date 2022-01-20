"use strict"

function checkInput(value) {
  
  let isNotNumber = (isNaN(value) || typeof value != "number");
  let isNotInRange = value < 1 || value > 7;
    
  if (isNotNumber) {
    throw new Error ('parameter type is not a Number');
  }
  else if (isNotInRange) {
    throw new Error ('parameter should be in the range of 1 to 7');
  }
  else {
    return value;
  }
}

function f(dayNum) {
  let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  
  return days[checkInput(dayNum) - 1];
}