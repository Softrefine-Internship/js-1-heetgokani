// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]
"use strict";
function mergeAndSortArrays(arr1, arr2) {
  return arr1.concat(arr2).sort(function (a, b) {
    return a - b;
  });
}
let array1 = [3, 5, 1];
let array2 = [4, 2];
let mergedArray = mergeAndSortArrays(array1, array2);
console.log(mergedArray);
