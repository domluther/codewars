// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function solve(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const charOffset = 96;
  let score = 0;
  let maxScore = 0;
  // Iterate through the letters
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    // If it's a vowel, it's the end of that substring
    if (vowels.includes(letter)) {
      // Did we set a new max score?
      if (score > maxScore) {
        maxScore = score;
      }
      //   Score is reset
      score = 0;
    } else {
      // Update the score by the value of that letter
      let letterScore = letter.charCodeAt(0) - charOffset;
      score += letterScore;
    }
  }
  //   Needed in case the current score is bigger than an earlier one
  return Math.max(score, maxScore);
}

const ans = solve('chruschtschov');
// 26
console.log(ans);
