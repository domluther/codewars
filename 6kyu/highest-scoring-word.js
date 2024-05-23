// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const words = x.split(' ');
  //   Iterate through the words, calculate score of the word. Beat highest score? store the word + score
  return words.reduce(
    (acc, cur) => {
      const wordScore = calcScore(cur);
      // If the score of this word is higher than the current highest score
      if (wordScore > acc['score']) {
        // Update the word + score
        acc['word'] = cur;
        acc['score'] = wordScore;
      }
      return acc;
    },
    { word: '', score: 0 }
  )['word'];
}

function calcScore(word) {
  return word.split('').reduce((acc, cur) => acc + cur.charCodeAt(0) - 96, 0);
}
