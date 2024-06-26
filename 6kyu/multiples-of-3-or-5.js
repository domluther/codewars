// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// num negative? return 0

// iterate from 1 to num, if divisible by 3/5, add to array

//  return sum of  array

function solution(number) {
  // num negative? return 0
  if (number < 0) return 0;
  // iterate from 1 to num, if divisible by 3/5, add to array
  let total = 0;
  for (let num = 1; num < number; num++) {
    total = num % 3 === 0 ? total + num : num % 5 === 0 ? total + num : total;
  }
  return total;
}

// Not using a ternary
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
