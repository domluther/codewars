// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
  // Out of range
  if (n < 0 || n > 12) throw new RangeError();

  //   Base case
  if (n == 0) return 1;
  // Ans is n * factorial n-1 so recur
  return n * factorial(n - 1);
}

const ans = factorial(5);
console.log(ans);

// Solve in O(1)? have the answers ready in a map and return it
