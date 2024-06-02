// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s) {
  let upperCount = 0;
  let lowerCount = 0;
  const endOfUpper = 'Z'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    // Iterate through - count upper + lower
    s.charCodeAt(i) <= endOfUpper ? upperCount++ : lowerCount++;
  }
  // If upper > lower - output capitalised
  // Else output lower case
  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
}

const ans = solve('HELLo');
console.log(ans);

// Notes
// Could have worked out lowerCount by doing length - upperCount after the loop
// Could have used regex - 'remove all lower/upper case letters - how long is it?'
