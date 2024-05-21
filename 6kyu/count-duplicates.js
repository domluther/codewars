// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//
// My solution
//
function duplicateCount(text) {
  // Case insensitive
  text = text.toLowerCase();
  // To hold counts of characters
  const map = {};
  // Count characters
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    map[char] = map[char] + 1 || 1;
  }

  // How many distincts more than 1?
  let distinct = 0;
  distinct = Object.values(map).reduce(
    (acc, cur) => (cur > 1 ? acc + 1 : acc),
    distinct
  );

  return distinct;
}
