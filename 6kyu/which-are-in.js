// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]

// Example 2:
// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: In some languages r must be without duplicates.

function inArray(array1, array2) {
  // Set because only want one - saves having to check if it's in there explicitly
  const res = new Set();
  // Iterate through the elements in one array
  for (let substring of array1) {
    for (let str of array2) {
      // Are they in the other array?
      if (str.includes(substring)) {
        res.add(substring);
      }
    }
  }
  return Array.from(res).sort();
}
a1 = ['gla', 'ect', 'oes', 'ing', '1.9'];

a2 = [
  'your',
  'the',
  'In',
  'updated',
  'have',
  'Ruby',
  'questions',
  'browse',
  'comment)',
  'is',
  'have',
  'you',
  'pointed',
  'out',
  'not',
  'best',
  'opinion',
  'have',
  'what',
  'reference',
  'I',
  'does',
  'for',
];

const ans = inArray(a1, a2);
console.log(ans);
