// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1
// Help:
// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(roman) {
  let specialSymbolLookup = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let year = 0;
  let position = 0;
  while (position < roman.length) {
    // Check for special characters
    let snippet = roman.slice(position, position + 2);
    if (specialSymbolLookup[snippet]) {
      year += specialSymbolLookup[snippet];
      position += 2;
    } else {
      // Not special so just need the next symbol
      let snippet = roman.slice(position, position + 1);
      year += lookup[snippet];
      position += 1;
    }
  }
  // Iterate through the string and add to the year part by part
  return year;
}

const ans = solution('MCMXCIV');

console.log(ans);

// Found solution
function solutionCodeWars(roman) {
  // Key lookups
  var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  var numbers = roman.split('');
  var sum = 0,
    i;

  // Iterate through the number
  for (i = 0; i < numbers.length; i++) {
    // If the first character is less than the second one - special case time
    if (data[numbers[i]] < data[numbers[i + 1]]) {
      // Add eg (1000 - 100) because CM
      sum += data[numbers[i + 1]] - data[numbers[i]];
      i++;
    } else {
      // Just add the next value
      sum += data[numbers[i]];
    }
  }

  return sum;
}
