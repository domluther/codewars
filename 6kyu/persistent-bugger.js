// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// My solution
// while the length > 1

function persistence(num) {
  let repeats = 0;
  let value = num + '';
  while (value.length > 1) {
    //     Times the numbers
    value = value.split('').reduce((acc, cur) => +acc * +cur, 1) + '';
    repeats++;
  }
  return repeats;
}

// Cute use of for - Do that repetitions for the number needed for num to be not be over 9
function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split('')
      .reduce((t, c) => c * t);
  }
  return i;
}
