// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function (test, original) {
  // Not same length? Can't be an anagram
  if (test.length !== original.length) return false;

  //   Easiest to compare if they're lower case and sorted arrays
  const testLower = test.toLowerCase().split('').sort();
  const originalLower = original.toLowerCase().split('').sort();

  //   Any character not the same? Then it's not an anagram
  for (let i = 0; i < testLower.length; i++) {
    if (testLower[i] !== originalLower[i]) return false;
  }

  return true;
};

console.log(isAnagram('foefet', 'toffee'));

// Can't compare two arrays. Can compare two strings.

var isAnagramJoin = function (test, original) {
  // Not same length? Can't be an anagram
  if (test.length !== original.length) return false;

  //   Sort the characters in the string
  const testLower = test.toLowerCase().split('').sort().join();
  const originalLower = original.toLowerCase().split('').sort().join();

  return testLower === originalLower;
};

console.log(isAnagramJoin('hello', 'ollhe'));
