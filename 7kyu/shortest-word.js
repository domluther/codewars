// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution
// Split into array
// Reduce it
function findShort(s) {
  return s
    .split(' ')
    .reduce((acc, cur) => (cur.length < acc ? cur.length : acc), Infinity);
}

// Could have used map
function findShort(s) {
  return Math.min(...s.split(' ').map((s) => s.length));
}
