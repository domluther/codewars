// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
  const startUpper = [];
  const startLower = [];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      startUpper.push(s.at(i).toUpperCase());
      startLower.push(s.at(i).toLowerCase());
    } else {
      startLower.push(s.at(i).toUpperCase());
      startUpper.push(s.at(i).toLowerCase());
    }
  }
  return [startUpper.join(''), startLower.join('')];
}

const ans = capitalize('abcdef');
console.log(ans);
