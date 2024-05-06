// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// My solution
// Iterate through the string

// Is it in hash map? Increment if so, set to 1 if not

// Return object
function count(string) {
  const dict = {};
  string
    .split('')
    .forEach((char) => (dict[char] = dict[char] ? dict[char] + 1 : 1));

  return dict;
}

// Could use reduce and ||
function count(string) {
  return string.split('').reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}
