// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

// My solution

// Map through, return char.repeat(2)
function doubleChar(str) {
  return str
    .split('')
    .map((s) => s.repeat(2))
    .join('');
}

// c + c is probably more efficient than calling a method
const doubleChar = (str) =>
  str
    .split('')
    .map((c) => c + c)
    .join('');
