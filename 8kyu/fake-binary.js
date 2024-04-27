// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// My solution
function fakeBin(x) {
  return x
    .split('')
    .map((char) => (char < 5 ? 0 : 1))
    .join('');
}

// More traditional approach
function fakeBin(str) {
  var newStr = '';
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += '1';
    } else {
      newStr += '0';
    }
  }
  return newStr;
}
