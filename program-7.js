// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]
"use strict";
function removing_duplicate_values(arr1) {
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < arr2.length; j++) {
      if (
        arr2[j].title === arr1[i].title &&
        arr2[j].author === arr1[i].author
      ) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      arr2.push(arr1[i]);
    }
  }
  return arr2;
}
let arr1 = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];
console.log(removing_duplicate_values(arr1));
