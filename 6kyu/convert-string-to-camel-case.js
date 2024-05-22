// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// My solution
// Split into words by _ or -
// All lower case and then make the first letter of word uppercase
function toCamelCase(str) {
  if (str === '') return '';
  str = str.replaceAll('_', ' ').replaceAll('-', ' ');
  let splitWords = str.split(' ');

  return splitWords
    .map((word, index) =>
      index === 0
        ? word.at(0) + word.slice(1).toLowerCase()
        : word.at(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}
