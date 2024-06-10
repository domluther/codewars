// DESCRIPTION:
// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

// Example:
// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

// Examples:
// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// Notes:
// try not to modify the input list of distances ls
// in some languages this "list" is in fact a string (see the Sample Tests).

function chooseBestSum(t, k, ls) {
  if (k > ls.length) return null;
  // Generate the combinations
  let combinations = genCombos(ls, k);

  //   Used to keep track of the closest total
  let closest = 0;
  //   Sum each of the combinations until you find a matching total/try them all
  // If k is 1, the combinations won't be a nested array so the other function fails
  if (k === 1) {
    for (value of combinations) {
      if (value === t) return value;
      if (value <= t && value > closest) {
        closest = value;
      }
    }
    // Is that total better than the one you've calculated so far?
  } else {
    for (combination of combinations) {
      total = 0;
      total = sumArray(combination);
      // Find the total? Stop calculating and return it
      if (total === t) return total;
      // Is that total better than the one you've calculated so far?
      if (total <= t && total > closest) {
        closest = total;
      }
    }
  }
  return closest === 0 ? null : closest;
}

function sumArray(combination) {
  let total = 0;
  for (value of combination) {
    total += value;
  }
  return total;
}

// n is the array, k is the size of each set
// https://jarednielsen.com/algorithm-combinations/ need to understand
function genCombos(n, k) {
  const combos = [];
  let head;
  let tail;

  if (k === 1) return n;
  for (let i = 0; i < n.length; i++) {
    head = n.slice(i, i + 1);
    tail = genCombos(n.slice(i + 1), k - 1);
    for (let j = 0; j < tail.length; j++) {
      let combo = head.concat(tail[j]);
      combos.push(combo);
    }
  }

  return combos;
}

var ts = [50, 55, 56, 57, 58];
const ans = chooseBestSum(163, 1, ts);
console.log(ans);
