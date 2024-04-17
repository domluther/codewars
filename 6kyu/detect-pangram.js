// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My solution

// Put the string into lower case

// Spread into a set

// Remove non alphabet characters

// Length 26?

function isPangram(string) {
  // Regex - replace anythinig that is ^ (not) a-z with ''
  const letters = new Set(string.toLowerCase().replace(/[^a-z]/g, ''));
  return letters.size === 26;
}
