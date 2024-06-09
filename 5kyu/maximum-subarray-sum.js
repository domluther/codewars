// DESCRIPTION:
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// Easy leetcode - solved O(n^2)
var maxSequence = function (arr) {
  // Empty list 0 sum
  if (arr.length === 0) return 0;
  // ...
  let max = 0;
  let current;
  for (let start = 0; start < arr.length; start++) {
    current = 0;
    for (let i = start; i < arr.length; i++) {
      current += arr[i];
      if (current > max) max = current;
      console.log(current);
    }
  }
  return max;
};

function maxSequenceSliding(arr) {
  if (arr.length === 0) return 0;
  // First value is the max
  let max = arr[0];
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    // Try adding the current with the next item, if it's not bigger then the window restarts
    current = current + arr[i] > arr[i] ? current + arr[i] : arr[i];
    max = Math.max(current, max);
  }
  return max;
}

const sequence = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const ans = maxSequenceSliding(sequence);
console.log(ans);
