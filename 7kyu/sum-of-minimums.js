// DESCRIPTION:
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// My solution

function sumOfMinimums(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    // Iterate through nested arrays finding the smallest value (Math.min is shorter but...)
    let min = Infinity;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < min) min = arr[i][j];
    }
    // Having found the minimum, add it to the running total
    total += min;
  }
  return total;
}

const ans = sumOfMinimums([
  [7, 9, 8, 6, 2],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
]);

console.log(ans);

// In a line
const sumOfMinimums2 = (arr) => arr.reduce((p, c) => p + Math.min(...c), 0);

const ans2 = sumOfMinimums2([
  [7, 9, 8, 6, 2],
  [6, 3, 5, 4, 3],
  [5, 8, 7, 4, 5],
]);

console.log(ans2);
