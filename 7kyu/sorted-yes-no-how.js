// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let ascending = true;
  let descending = true;
  for (let i = 0; i < array.length - 1; i++) {
    const first = array[i];
    const second = array[i + 1];
    // If the first is not greater than the second it's not ascending
    if (first > second) ascending = false;
    // If the first is not less than the second it's not descending
    if (first < second) descending = false;
  }
  //   Can then determine which it is
  if (ascending) return 'yes, ascending';
  if (descending) return 'yes, descending';
  return 'no';
}

const arr = [3, 2, 1, 0];
const ans = isSortedAndHow(arr);
console.log(ans);

// One liner
function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? 'yes, ascending'
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
      ? 'yes, descending'
      : 'no';
}
