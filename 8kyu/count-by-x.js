// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  // Iterate through pushing values in
  for (let i = x; i <= x * n; i = i + x) {
    // Cleaner, i <= n, push x * i
    z.push(i);
  }
  return z;
}

// Array from in a way I didn't know
const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);
