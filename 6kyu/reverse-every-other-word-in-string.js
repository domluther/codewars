// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
  // Remove whitespace and split up the string
  const words = str.trim().split(' ');
  //   Reverse alternate words
  return words
    .map((word, i) => (i % 2 === 0 ? word : reverseWord(word)))
    .join(' ');
}

// Separate to reverse the word
function reverseWord(word) {
  return word.trim().split('').reverse().join('');
}

const test1 = 'Reverse this string, please!';
const test2 = "I really don't like reversing strings!";

const ans1 = reverse(test1);
console.log(ans1);
const ans2 = reverse(test2);
console.log(ans2);
