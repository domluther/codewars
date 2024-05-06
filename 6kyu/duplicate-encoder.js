// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// My solution

// Loop once - Count up instances of characters
// Loop two - replace characters
// ( if only once
// ) if multiple times

function duplicateEncode(word) {
  const dict = {};
  // Case-insensitive so lower case
  const splitWord = word.toLowerCase().split('');
  //   Count frequency
  splitWord.forEach((char) => (dict[char] = dict[char] ? dict[char] + 1 : 1));

  return splitWord.map((char) => (dict[char] === 1 ? '(' : ')')).join('');
}

// Alternate solution - is the first occurence of a character the same index as the last index of a character? Cleaner than mine
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
