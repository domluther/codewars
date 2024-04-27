// Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// 2 = 4
// 3 = 4 7
// 4 = 4 7 10

// My solution
function SeriesSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (1 + 3 * (i - 1));
  }
  return Number.parseFloat(sum).toFixed(2);
}

// Cleaner
function SeriesSum(n) {
  // Starting with i at 0 makes for a simpler sum
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }
  // Didn't parse it to a float because this would ensure you don't have a 1
  return s.toFixed(2);
}
