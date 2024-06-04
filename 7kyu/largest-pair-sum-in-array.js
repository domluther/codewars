// DESCRIPTION:
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(numbers) {
  let sum = 0;
  //   The first one is the biggest.
  let biggest = numbers[0];
  let secondBiggest = 0;

  // Simplest? Iterate through. Find the largest two numbers.
  for (let i = 1; i < numbers.length; i++) {
    let num = numbers[i];
    if (num > biggest) {
      secondBiggest = biggest;
      biggest = num;
    } else if (num > secondBiggest) secondBiggest = num;
  }
  return biggest + secondBiggest;
}

let vals = [10, 14, 2, 23, 19];
const ans = largestPairSum(vals);
console.log(ans);

// One liner - sort it and return the sum of first two numbers - but O(n log n) instead of O(n)

// Alternatively - find the biggest, splice it, find the biggest, splice it - O(n) but need to loop twice so slower
