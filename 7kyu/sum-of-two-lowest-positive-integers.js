// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// Return min + max
function sumTwoSmallestNumbers(numbers) {
  // Smallest number? - O(n)
  const firstMin = Math.min(...numbers);

  //   Remove it
  numbers.splice(numbers.indexOf(firstMin), 1);
  // Next smallest number - O(n)
  const secondMin = Math.min(...numbers);
  console.log(numbers, firstMin, secondMin);
  return firstMin + secondMin;
}

// Shortest code but O(n log n)
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}
