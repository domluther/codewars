// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

// FUNDAMENTALS

function wordsToMarks(string) {
  let total = 0;
  let aOffset = 'a'.charCodeAt(0) - 1;
  // Iterate through each letter
  for (let i = 0; i < string.length; i++) {
    // Sum up charCodeAt() take away base value of a-1 to work out position of character in alphabet
    total += string.charCodeAt(i) - aOffset;
  }
  return total;
}
