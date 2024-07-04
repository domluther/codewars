// Translate a string to pilot's alphabet

function toNato(words) {
  let sentence = '';
  const punctuation = [',', '.', '!', '?'];
  const letters = words.split('');
  for (letter of letters) {
    // Skip spaces
    if (letter === ' ') {
      // Add punctuation
    } else if (punctuation.includes(letter)) {
      sentence += ` ${letter}`;
      // Add appropriate letter
    } else {
      sentence += ` ${NATO[letter.toUpperCase()]}`;
    }
  }
  //   Trim to remove initial ' '
  return sentence.trim();
}
