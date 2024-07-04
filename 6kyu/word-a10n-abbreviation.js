// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").

function abbreviate(string) {
  // Split into parts
  const words = string.split(' ');
  const output = [];
  // Variable that holds what is going to be added
  let toPush;
  // Loop through the words
  for (word of words) {
    toPush = '';
    if (word.length < 4) {
      toPush = word;
    } else if (word.includes('-')) {
      const hyphenated = word.split('-');
      const hyphenatedOutput = [];
      let hyphenPush;
      for (hyphenatedWord of hyphenated) {
        if (hyphenatedWord.length < 4) {
          hyphenPush = hyphenatedWord;
        } else {
          hyphenPush = shortenWord(hyphenatedWord);
        }
        hyphenatedOutput.push(hyphenPush);
        console.log(hyphenatedOutput);
      }
      toPush = hyphenatedOutput.join('-');
    } else {
      toPush = shortenWord(word);
    }
    output.push(toPush);
  }
  return output.join(' ');
}

function shortenWord(word) {
  // Words with a comma need shortening without thinking about the comma, then add it back
  if (word.endsWith(',')) return `${word[0]}${word.length - 3}${word.at(-2)},`;

  return `${word[0]}${word.length - 2}${word.at(-1)}`;
}

const inp1 = 'You need, need not want, to complete this code-wars mission';
const ans = abbreviate(inp1);
console.log(ans);
