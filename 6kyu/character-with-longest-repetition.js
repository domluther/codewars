// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// Happy coding! :)

function longestRepetition(s) {
  // Deals with blank strings
  let currentLetter = s[0] || '';
  let count = 0;
  let bestLetter = currentLetter;
  let maxCount = count;

  for (const letter of s) {
    // Same pattern, increase it.
    if (letter === currentLetter) {
      count += 1;
    } else {
      currentLetter = letter;
      count = 1;
    }
    // Beat the best?
    if (count > maxCount) {
      bestLetter = currentLetter;
      maxCount = count;
    }
  }
  return [bestLetter, maxCount];
}

const inp1 = 'aaaabb';
// a4
const inp2 = 'bbbaaabaaaa';
// a4

const inp3 = 'cbdeuuu900';
// u3

const inp4 = '';

const ans = longestRepetition(inp2);
console.log(ans);
