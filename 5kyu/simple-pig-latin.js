// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const pigWords = [];
  // Split the string into words
  let words = str.split(' ');
  // Loop through the words
  for (word of words) {
    let pigWord = word;
    // Exception - if first character is punctuation don't do that
    if (word.charCodeAt(0) >= 65) {
      // take the first character, move it to the end, add ay
      pigWord = word.slice(1) + word[0] + 'ay';
    }
    pigWords.push(pigWord);
  }
  return pigWords.join(' ');
}

const sentence = 'Pig latin is cool !';
const ans = pigIt(sentence);
console.log(ans);
