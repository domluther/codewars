// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// Create an array of the odd ones
// Sort that array
// Iterate through the original array, if the number is odd replace it with the shifted out first value of the odd sorted array

// My solution
function sortArray(array) {
  //   Sort the odd numbers
  let sortedOdds = array
    .filter((e) => Math.abs(e % 2) === 1)
    .sort((a, b) => a - b);
  //   Is the number odd? Replace it with the next item in the sortedOdds array
  const ans = array.map((e) =>
    Math.abs(e % 2) === 1 ? sortedOdds.shift() : e
  );
  return ans;
}

// Needed Math.abs() to deal with negative numbers

// Could have shortened it to e % 2 - -0 evaluates as falsy
