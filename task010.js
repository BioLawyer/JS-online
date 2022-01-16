"use strict"

let arr = [6,5,4,3,2,1];

let reversedArr = [];

for(let i = 0; i < arr.length; i++){
  reversedArr[arr.length - (i + 1)] = arr[i];
 }

console.log(reversedArr);