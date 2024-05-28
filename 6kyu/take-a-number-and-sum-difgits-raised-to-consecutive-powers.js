// Task
// We need a function to collect these numbers, that may receive two integers
// a, b that defines the range
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range
// [a,b] the function should output an empty list.

// 90, 100 --> []

// My solution
function sumDigPow(a, b) {
  const results = [];
  // Iterate through the range
  for (let i = a; i <= b; i++) {
    // Add it to the array if it meets criteria
    if (sameSummed(i)) results.push(i);
  }
  return results;
}

function sameSummed(i) {
  // Iterate through the split string
  // Sum the split digits to the power of the index+1
  const summed = String(i)
    .split('')
    .reduce((acc, cur, index) => acc + Math.pow(cur, index + 1), 0);
  // == because str v int - saves casting to int but wouldn't do normally
  return summed == i;
}

const ans = sumDigPow(1, 2646899);
console.log(ans);
