// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")
"use strict";
function findCommonElement(array) {
  let counts = {};
  let mostCommonElement = null;
  let highestCount = 0;
  for (let element of array) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > highestCount) {
      highestCount = counts[element];
      mostCommonElement = element;
    }
  }
  console.log(`${mostCommonElement} ${highestCount} times`);
}
let sampleArray = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
findCommonElement(sampleArray);
