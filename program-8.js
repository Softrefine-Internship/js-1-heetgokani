// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.
"use strict";
function dash_in_even_numbers(num) {
  let num1 = num.toString();
  let result = "";
  for (let i = 0; i < num1.length; i++) {
    result += num1[i];
    if (i < num1.length - 1) {
      if (parseInt(num1[i]) % 2 === 0 && parseInt(num1[i + 1]) % 2 === 0) {
        result += "-";
      }
    }
  }
  return result;
}
let original_num = "025468";
console.log(dash_in_even_numbers(original_num));
