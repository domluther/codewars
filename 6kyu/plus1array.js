// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

// My solution
// Option 1 - Join -> Treat as number -> add 1 -> split
//   return String(+arr.join('') + 1)
//     .split('')
//     .map((val) => +val);
// Fails if it hits eg 07 and 08 is expected

function upArray(arr) {
  // Empty array? Not allowed
  if (arr.length === 0) return null;

  // Any invalid values?
  for (val of arr) {
    // Value not between 0-9 in array mean it's invalid
    if (val < 0 || val > 9) return null;
  }
  //   Iterate through the array backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    carry = false;
    const val = arr[i];
    // Find the first digit that's under 9 and increment it
    if (val < 9) {
      arr[i] += 1;
      return arr;
    }
    if (val === 9) {
      // That digit is a 0
      arr[i] = 0;
      carry = true;
    }
  }
  //   If there's a carry then you need to add a new digit
  if (carry) arr.unshift(1);
  return arr;
}

const inp = [
  6, 0, 1, 8, 2, 2, 2, 8, 0, 3, 0, 9, 4, 7, 2, 3, 3, 2, 1, 9, 7, 3, 6, -3, 8, 3,
  0, 8, 0, 1, 4, 3, 1, 4, 6, 4, 0, 6, 2,
];
const ans = upArray(inp);
console.log(ans);
