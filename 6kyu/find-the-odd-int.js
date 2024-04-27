// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// My solution

function findOdd(A) {
  A.sort((a, b) => a - b);
  let current = A.at(0);
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    // Is it a continuation of the run?
    if (current === A.at(i)) {
      count += 1;
      console.log(count, current);
    } else {
      //       If not, was that an odd run?
      if (count % 2 === 1) {
        return current;
      } else {
        //         Not an odd run? Starting a new run
        current = A.at(i);
        count = 1;
      }
    }
  }
  //   Got to the end - ended on an odd run so that's the answer
  return current;
}

// Solvable using bitwise
// https://mike-diaz006.medium.com/the-bitwise-xor-operator-and-how-it-helped-me-find-the-odd-int-d2d98c77f5e
