// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]
"use strict";
function finding_difference_func(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1) {
      result.push(array1[i]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) === -1) {
      result.push(array2[i]);
    }
  }
  return result;
}
let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
console.log(finding_difference_func(arr1, arr2));
