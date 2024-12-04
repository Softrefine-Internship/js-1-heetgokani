// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
"use strict";
function find_duplicate_values(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  let uniqueArray = Array.from(new Set(mergedArray));
  uniqueArray.sort((a, b) => a - b);
  return uniqueArray;
}
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [3, 4, 5, 7];
console.log(find_duplicate_values(array1, array2));
