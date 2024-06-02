// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  // Absolute to deal with possible - signs, could also have just replaced it out but abs seemed faster
  let sum = String(Math.abs(number))
    .split('')
    .reduce((acc, cur) => Number(acc) + Number(cur));
  return sum;
}

const ans = sumDigits(92);
console.log(ans);

// Not using reduce
function sumDigits(number) {
  // Turn number into absolute value -> Stringify number -> Split at each character
  var values = String(Math.abs(number)).split('');
  // Instantiate variable to hold math result
  var product = null;
  // For each value, add the value to the product
  for (var i = 0; i < values.length; i++) {
    product = product + Number(values[i]);
  }
  // Return the product variable
  return product;
}
