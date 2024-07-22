// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

function decipherThis(str) {
  // Split words
  const words = str.split(' ');
  console.log(words);
  // Deal with each word
  // Turn number into letter
  const changedWords = [];
  for (let word of words) {
    // Find the number and the character it represents, then swap it out
    const charCode = parseInt(word);
    const originalCharacter = String.fromCharCode(charCode);
    word = word.replace(`${charCode}`, originalCharacter);
    // 2nd and final character are swapped - if the word is only 2 characters long ...
    let newWord = word.at(0);
    if (word.length > 1) {
      newWord += word.at(-1) + word.slice(2, word.length - 1);
    }
    if (word.length > 2) {
      newWord += word.at(1);
    }
    changedWords.push(newWord);
  }
  return changedWords.join(' ');
}

const inp = '72olle 103doo 100';
const ans = decipherThis(inp);
// Hello good day
console.log(ans);
