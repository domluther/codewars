// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit) {
  // Iterate through array
  for (let i = 0; i < a.length; i++) {
    // value > limit? return false
    if (a[i] > limit) return false;
  }

  return true;
}

// Shorter but less performant (always looks at every item to calc max while mine could stop earlier)
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
