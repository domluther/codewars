// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

// My solution
function getSum(a, b) {
  // Ensure a is smaller
  if (b < a) [b, a] = [a, b];

  //   Iterate through the range and sum up
  let total = 0;
  for (let start = a; start <= b; start++) {
    console.log(start);
    total += start;
    console.log(start, total);
  }
  return total;
}

// Cleaner solution
const GetSum = (a, b) => {
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  //   Sum of arithmetic sequence
  return ((end - start + 1) * (start + end)) / 2;
};
