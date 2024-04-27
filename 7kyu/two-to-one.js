// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My solution
function longest(s1, s2) {
  //   Split into a set to get the unique charactes
  let unique = new Set((s1 + s2).split(''));
  // Put it back to an array and sort it before joining
  return Array.from(unique).sort().join('');
}
