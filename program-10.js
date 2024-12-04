// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]
"use strict";
function sumArrays(array1, array2) {
  let combinedArray = [];
  let maxLength = 0;
  if (array1.length > array2.length) {
    maxLength = array1.length;
  } else {
    maxLength = array2.length;
  }
  for (let i = 0; i < maxLength; i++) {
    let value1 = 0;
    let value2 = 0;
    if (i < array1.length) {
      value1 = array1[i];
    }
    if (i < array2.length) {
      value2 = array2[i];
    }
    combinedArray.push(value1 + value2);
  }
  return combinedArray;
}
let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8, 13];
console.log(sumArrays(array1, array2));
