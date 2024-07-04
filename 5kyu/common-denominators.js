// Input is an array of fractions, return them all in with the lowest common denominator

function convertFrac(lst) {
  let commonDenominator = 1;
  for (frac of lst) {
    const numerator = frac[0];
    const denominator = frac[1];
    commonDenominator *= denominator;
  }

  console.log(commonDenominator);
  const listOfNumerators = [];
  for (frac of lst) {
    const numerator = frac[0];
    const denominator = frac[1];
    listOfNumerators.push((numerator * commonDenominator) / denominator);
  }
  console.log(listOfNumerators);
  const listOfSimplified = [];
  const numeratorRatio = findHighestCommonFactor([
    commonDenominator,
    ...listOfNumerators,
  ]);
  console.log(numeratorRatio);
  const finalCommonDenominator = commonDenominator / numeratorRatio;
  console.log(finalCommonDenominator);
  for (numerator of listOfNumerators) {
    listOfSimplified.push([numerator / numeratorRatio, finalCommonDenominator]);
  }

  return formatList(listOfSimplified);
}

function findHighestCommonFactor(listOfNums) {
  // Takes in a list of numbers
  // Find the smallest number from the list
  let smallest = Math.min(...listOfNums);
  // While smallest is bigger than 0
  let noRemainder;
  while (smallest > 0) {
    noRemainder = true;
    for (num of listOfNums) {
      if (num % smallest !== 0) noRemainder = false;
    }
    if (noRemainder) return smallest;
    smallest--;
  }
  //   Should never get here because dividing by 1 will return that
  console.log('error no HCF');
  return smallest;
}

function formatList(simplfiedList) {
  let ans = '';
  for (fraction of simplfiedList) {
    ans += `(${fraction[0]},${fraction[1]})`;
  }
  return ans;
}

const inp = [
  [12, 24],
  [8, 24],
  [6, 24],
];

const inp2 = [
  [69, 130],
  [87, 1310],
  [3, 4],
];

const ans = convertFrac(inp2);
console.log(ans);
