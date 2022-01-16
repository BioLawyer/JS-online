"use strict"

let arr = [1,2,3,-5,-2,1,-4];
let sum = 0;

for(let elem of arr){
  if(elem > 0){
    sum += elem;
   }
 }

console.log(sum);