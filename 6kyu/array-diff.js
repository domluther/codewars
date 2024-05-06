// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// My solution

function arrayDiff(a, b) {
  //   Easy n^2 - is b[0] in a? Filter if it is.
  for (let i = 0; i < b.length; i++) {
    // bad practice - should mutate array
    a = a.filter((value) => value !== b[i]);
  }
  return a;
}

// Better - includes() exists
function array_diff(a, b) {
  // Filter a, return if e is not included in b
  return a.filter((e) => !b.includes(e));
}
