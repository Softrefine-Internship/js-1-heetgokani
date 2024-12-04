// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]
"use strict";
function union_array_func(array1, array2) {
  let combinedArray = array1.concat(array2);
  let resultArray = [];
  for (let i = 0; i < combinedArray.length; i++) {
    if (resultArray.indexOf(combinedArray[i]) === -1) {
      resultArray.push(combinedArray[i]);
    }
  }
  resultArray.sort((a, b) => a - b);
  return resultArray;
}
let list1 = [1, 2, 3];
let list2 = [100, 2, 1, 10];
console.log(union_array_func(list1, list2));
