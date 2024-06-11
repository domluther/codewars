// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:

// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):

//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\
//                     4/            4|          4\
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*

// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

// If an array with one element is folded, it stays as the same array.

function foldArray(array, runs) {
  let toFold = array;
  let folded;

  //   Each run, the folded array needs to be blank again
  for (let run = 1; run <= runs; run++) {
    folded = [];

    // Iterate through adding the first + last elements together
    for (let leftPointer = 0; leftPointer < toFold.length / 2; leftPointer++) {
      rightPointer = toFold.length - leftPointer - 1;

      //   Not pointing at the same element? Then fold, otherwise add that element
      if (leftPointer !== rightPointer) {
        folded.push(toFold[leftPointer] + toFold[rightPointer]);
      } else {
        folded.push(toFold[leftPointer]);
      }
    }
    // Get ready to fold again
    toFold = [...folded];
  }
  return folded;
}

var input = [1, 2, 3, 4, 5];
var expected = [6, 6, 3];
const ans = foldArray(input, 1);
console.log(ans);

// Cute way of folding the array using pop + shift. However shift is O(n) (not biggest impact as got nested loop)
// while (c.length) r.push(c.pop() + (c.shift() || 0));
