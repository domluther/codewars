// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// My solution - filter the array down to that value, how many are there?
function check(a, x) {
  return a.filter((e) => e === x).length > 0;
}

// I forgot includes exists
const check = (a, x) => a.includes(x);
