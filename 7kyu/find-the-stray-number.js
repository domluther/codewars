// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// O of n
function stray(numbers) {
  let repeated = 0;
  // if the first two numbers are the same, then that's the common number
  if (numbers.at(0) === numbers.at(1)) {
    repeated = numbers.at(0);
  }
  //   Otherwise if 0 + 2 or 2 + 1 are the same
  else if (numbers.at(0) === numbers.at(2)) {
    repeated = numbers.at(0);
  } else {
    repeated = numbers.at(1);
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== repeated) return numbers[i];
  }
}
