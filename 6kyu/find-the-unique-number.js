// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// Lazy - sort and then you know - but sorting isn't performant
function findUniq(arr) {
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted);

  return sorted.at(0) === sorted.at(1) ? sorted.at(-1) : sorted.at(0);
}

// Faster as will iterate through until the item is found
function findUniq(arr) {
  let [a, b, c] = arr.slice(0, 3);
  if (a != b && a != c) return a;
  for (let x of arr) if (x != a) return x;
}
