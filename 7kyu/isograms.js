// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// My solution
// Brute force - Iterate through, add to hashmap, if already in there return false
function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  const hashMap = {};
  for (let i = 0; i < str.length; i++) {
    if (hashMap[lowerStr[i]]) return false;
    hashMap[lowerStr[i]] = 1;
  }
  return true;
}

// Shortest - is a set of the string the same length as the string?
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
