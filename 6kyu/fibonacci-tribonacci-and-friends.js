// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence

// PREP
// Parameters
// signature - an array of length x of the first x elements.
// n - how many elements are wanted in return
// Can n be shorter than the length of the sig?

// Return
// The first n elements of the sequence

// Examples
// {1, 1, 1, 1} 10
// Means 4bonacci as array is 4 long
// 1, 1, 1, 1, 4, 7, 13, 25, 49, 94
// To calculate the final entry - sum the previous 4 entries

// {0, 0, 0, 0, 1}, 10
// 5bonnaci
//  0, 0, 0, 0, 1, 1, 2, 4, 8, 16

// { 1, 1}, 10
// First 10 of Regular fib sequence as 2 numbers
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// Pseudocode
// x = what is the length of the signature?
// While array is < n
// Sum the last x items together, push onto array

function Xbonacci(signature, n) {
  // How long is the array? What bonnaci are we solving?
  const x = signature.length;
  console.log(x);
  // New array
  const newArray = [...signature];

  while (newArray.length < n) {
    const nextVal = newArray.slice(-x).reduce((acc, cur) => acc + cur);
    console.log(nextVal);
    newArray.push(nextVal);
  }

  //   Deals with situations where n is less than the length of the signature
  //   Could also deal with as a guard clause at the top but would only save the creation of newArray
  return newArray.slice(0, n);
}

const ans = Xbonacci([1, 1, 1, 1], 0);
console.log(ans);
