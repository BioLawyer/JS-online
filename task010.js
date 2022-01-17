"use strict"

// поскольку по условиям задания на входе получем массив, уже отсортированный по убыванию,
// то для получения массива, отсортированного по возрастанию
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

// это решение для случаев, когда входящий массив предварительно не был отсортирован по убыванию

let arr = [6,5,4,3,2,1];

let lastIndex = arr.length;

for(; lastIndex > 0; lastIndex--){
  let currentIndex = 0;
  let nextIndex = 1;

  for(; currentIndex < lastIndex; currentIndex++, nextIndex++){
    if(arr[currentIndex] > arr[nextIndex]){

      let lesser = arr[nextIndex];
      arr[nextIndex] = arr[currentIndex];
      arr[currentIndex] = lesser;
    }
  }
}

console.log(arr);
