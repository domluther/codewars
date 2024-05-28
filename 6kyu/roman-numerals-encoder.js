// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

// In Roman numerals:

// 1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
// 2008 is written as 2000=MM, 8=VIII; or MMVIII.
// 1666 uses each Roman symbol in descending order: MDCLXVI.
// Example:

//    1 -->       "I"
// 1000 -->       "M"
// 1666 --> "MDCLXVI"
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

function solution(number) {
  const splitNum = String(number).split('');
  //Split number into digits - ensure numbers
  let thousands = +splitNum.at(-4) || 0;
  let hundreds = +splitNum.at(-3) || 0;
  let tens = +splitNum.at(-2) || 0;
  let ones = +splitNum.at(-1) || 0;

  //   Pass in to follow the pattern
  let hundredsText = generateText(hundreds, 'C', 'D', 'M');
  let tensText = generateText(tens, 'X', 'L', 'C');
  let onesText = generateText(ones, 'I', 'V', 'X');
  return `${'M'.repeat(thousands)}${hundredsText}${tensText}${onesText}`;
}

function generateText(value, base, mid, next) {
  // Each digit follows this same pattern

  return value === 9
    ? `${base}${next}`
    : value >= 5 && value < 9
      ? `${mid}${base.repeat(value - 5)}`
      : value === 4
        ? `${base}${mid}`
        : `${base.repeat(value)}`;
}

ans = solution(2024);
console.log(ans);
