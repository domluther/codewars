// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

function sumPairs(ints, s) {
  // Simplest version - find the two that add up to the value I'm after - hashmap solution is efficient
  const map = {};
  for (let i = 0; i < ints.length; i++) {
    let lookingFor = s - ints[i];
    // Is the other item in the map? Then we've found the solution - return it
    if (map[lookingFor] !== undefined) {
      return [ints[map[lookingFor]], ints[i]];
    }
    // Not in the map? Add it.
    if (map[ints[i]] === undefined) map[ints[i]] = i;
  }
  //   Got to the end without a pair? There isn't one so it's undefined
  return undefined;
}

const ans = sumPairs([1, 4, 8, 7, 3, 15], 8);
// [1, 7]
console.log(ans);
