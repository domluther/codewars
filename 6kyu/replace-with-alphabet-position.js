// DESCRIPTION:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  // case insensitive array is easier
  const splitText = text.toUpperCase().split('');

  const ASCIIOffset = 64;

  //   Convert every character to ascii value and take away offset so it becomes position in alphabet
  const ASCIIArray = splitText.map((char) => char.charCodeAt(0) - ASCIIOffset);

  //   Filter characters out of range - those that aren't in the range of the alphabet
  return ASCIIArray.filter((value) => value >= 1 && value <= 26).join(' ');
}

// Alternate ideas

// Use regex to filter unwanted characters
let alphabetPosition = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(' ');

//  Use a for loop to do both at once
for (var i = 0; i < text.length; i++) {
  var code = text.toUpperCase().charCodeAt(i);
  if (code > 64 && code < 91) result += code - 64 + ' ';
}
