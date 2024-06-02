// DESCRIPTION:
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:
'use strict';

// Done using built in methods
function flattenAndSort(array) {
  // Good luck, brave code warrior!
  array = array.flat().sort((a, b) => a - b);
  return array;
}
// Using core functionality
function flattenAndSort2(array) {
  const flattened = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (typeof array[i][j] === 'number') {
        flattened.push(array[i][j]);
      }
    }
  }
  return flattened.sort((a, b) => a - b);
}

const ans = flattenAndSort2([
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
]);
console.log(ans);
