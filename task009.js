"use strict"

let arr = [1,2,3,4,5,6];

let reversedArr = [];

for(let i = 0; i < arr.length; i++){
  reversedArr[arr.length - (i + 1)] = arr[i];
 }

console.log(reversedArr);