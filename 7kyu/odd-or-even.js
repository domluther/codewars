// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

// My solution
// Use reduce to sum the array
// Use % to determine if that's odd or even
function oddOrEven(array) {
  return array.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? 'even' : 'odd';
}

// More verbose - not using reduce
function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (result % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
