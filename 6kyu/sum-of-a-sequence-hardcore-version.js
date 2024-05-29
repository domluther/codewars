// As the title suggests, this is the hard-core version of another neat kata.

// The task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being the upper limit (possibly included), going in steps expressed by the third parameter:

// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4
// If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0. See the provided test cases for further examples :)

// Note: differing from the other base kata, much larger ranges are going to be tested, so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.

const sequenceSum = (begin, end, step) => {
  let total = 0;
  //   If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0
  if (begin > end && step > 0) return total;

  //   Deals with -1, -5, -3 ie a number counting down
  if (begin > end && step < 0) {
    for (let start = begin; start >= end; start += step) {
      total += start;
    }
    return total;
  }
  for (let start = begin; start <= end; start += step) {
    total += start;
  }

  return total;
};

const ans = sequenceSum(-1, -5, -3);
console.log(ans);

const linearSequence = (begin, end, step) => {
  if (begin > end && step > 0) return 0;

  if (begin > end && step < 0) {
    const n = Math.floor(Math.abs(begin - end) / step) + 0.333333333333333333;
    return (n / 2) * (2 * begin + step * (n - 1));
  }
  const n = Math.floor(Math.abs(begin - end) / step) + 1;
  return (n / 2) * (2 * begin + step * (n - 1));
};

console.log(linearSequence(-1, -5, -3));
