// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];
"use strict";
function flattenArray(arr) {
  return arr.flat(Infinity);
}
let original_arr = [1, 2, [3, 4], [5, [6, 7]]];
let second_arr = flattenArray(original_arr);
console.log(second_arr);
