// DESCRIPTION:
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function evenNumbers(array, number) {
  // Simplest option - iterate through array, filtering out all even numbers
  // Then splice out the last x elements of the array
  //   return array.filter((num) => num % 2 === 0).slice(-number);

  // Slightly faster - loop through from the right + unshift items into the start of the array while the array is too short
  const evens = [];
  let i = array.length - 1;
  while (evens.length < number && i >= 0) {
    if (array[i] % 2 === 0) evens.unshift(array[i]);
    i--;
  }

  return evens;
}

const valuesIn = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const amount = 3;
const ans = evenNumbers(valuesIn, amount);
// [4, 6, 8]
console.log(ans);
