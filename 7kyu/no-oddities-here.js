// DESCRIPTION:
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds(values) {
  // Return all non-odd values
  const goodValues = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) goodValues.push(values[i]);
  }
  return goodValues;
}

// One liner
function noOddsFilter(values) {
  return values.filter((value) => value % 2 === 0);
}

const values = [0, 1, 2, 3];
const ans = noOdds(values);
const ans2 = noOddsFilter(values);
// [0,2]
console.log(ans);
console.log(ans2);

//  Easier to read - isEven filter method passed in
function noOdds(values) {
  function isEven(number) {
    return number % 2 == 0;
  }

  return values.filter(isEven);
}
