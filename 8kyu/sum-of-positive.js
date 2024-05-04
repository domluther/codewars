// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// My solution
function positiveSum(arr) {
  // Filter out the positives, sum them
  return arr.filter((value) => value > 0).reduce((acc, cur) => acc + cur, 0);
}

// Shorter - combine them both
// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

// Or using a for loop
// function positiveSum(arr) {
//     let sum = 0;
//     for (n of arr) {
//       if (n > 0) sum += n;
//     }
//     return sum;
//   }
