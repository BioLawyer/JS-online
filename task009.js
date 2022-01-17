"use strict"

// поскольку по условиям задания на входе получем массив, уже отсортированный по возрастанию,
// то для получения массива, отсортированного по убыванию
// можем просто по очереди скопировать все элементы из исходного во временный массив в обратном порядке

let arr = [1,2,3,4,5,6];

let revArr = [];

let arrIndex = arr.length - 1;
let revArrIndex = 0;

for(; arrIndex > 0; arrIndex--, revArrIndex++){
  revArr[revArrIndex] = arr[arrIndex];
 }

arr = revArr;

console.log(arr);

// это решение для случаев, когда входящий массив не был отсортирован по возрастанию

let arr = [1,2,3,4,5,6];

let lastIndex = arr.length;

for(; lastIndex > 0; lastIndex--){
  let currentIndex = 0;
  let nextIndex = 1;

  for(; currentIndex < lastIndex; currentIndex++, nextIndex++){
    if(arr[currentIndex] < arr[nextIndex]){

      let greater = arr[nextIndex];
      arr[nextIndex] = arr[currentIndex];
      arr[currentIndex] = greater;
    }
  }
}

console.log(arr);
