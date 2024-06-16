// Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

// Ex:

// 274 -> '2-7-4'
// 6815 -> '68-1-5'

function dashatize(num) {
  const input = String(Math.abs(num));
  const characters = input.split('');
  //   Never a - before the string
  let output = '';
  for (let i = 0; i < characters.length; i++) {
    if (isOdd(characters[i])) {
      output += `-${characters[i]}-`;
    } else {
      output += characters[i];
    }
  }
  output = output.replaceAll('--', '-');
  if (output.endsWith('-')) output = output.substring(0, output.length - 1);
  if (output.substring(0, 1) === '-') output = output.substring(1);

  return output;
}

function isOdd(character) {
  return +character % 2 !== 0;
}

function dashatizeRegexed(num) {
  // Regex to replace any odd digits with the digit with a - before and after
  const replacedOdds = String(num).replace(/([13579])/g, '-$1-');
  //   Can't have doubled dashes
  const noDoubleDashes = replacedOdds.replace(/(--)/g, '-');
  //   Can't start or end with a -
  const notAtStart = noDoubleDashes.replace(/^-/, '');
  const notAtEnd = notAtStart.replace(/-$/, '');
  return notAtEnd;
}

const ans = dashatizeRegexed(17343);
console.log(ans);
