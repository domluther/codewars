// A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.

// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".

function removeNb(n) {
  const sum = (n * (n + 1)) / 2;
  const sumPlusOne = sum + 1;
  // Find two numbers (a and b) in range of 1 to n where...
  // a * b = sum - a - b
  // sum = a * b + a + b
  //   sum + 1 = a * b + a + b + 1
  //    sum +1 = (a+1) (b +1)

  //   Find the factors of sum+1
  let factors = [];
  for (let i = 1; i <= n; i++) {
    // If it's a factor
    if (sumPlusOne % i === 0) {
      // Make sure the other factor is in range, if so then push them -1 into the array
      if (sumPlusOne / i <= n) factors.push([i - 1, sumPlusOne / i - 1]);
    }
  }
  return factors;
}

const ans = removeNb(9301);
console.log(ans);
