/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
*/

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
"use strict";
function checkFlowerPlanting(flowerbed, n) {
  let i = 0;
  let count = 0;
  while (i < flowerbed.length) {
    if (flowerbed[i] === 0) {
      let canPlant = true;
      if (i > 0 && flowerbed[i - 1] === 1) {
        canPlant = false;
      }
      if (i < flowerbed.length - 1 && flowerbed[i + 1] === 1) {
        canPlant = false;
      }
      if (canPlant) {
        flowerbed[i] = 1;
        count++;
        i += 2;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  return count >= n;
}
console.log(checkFlowerPlanting([1, 0, 0, 0, 1], 1));
console.log(checkFlowerPlanting([1, 0, 0, 0, 1], 2));
