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

const ans = dashatize(27343);
console.log(ans);
