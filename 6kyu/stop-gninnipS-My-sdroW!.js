// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

//
// My solution
//  Split into words
// Length of word < 5? Add it back

function spinWords(string) {
  const words = string.split(' ');
  return words
    .map((word) => (word.length < 5 ? word : reverse(word)))
    .join(' ');
}

function reverse(word) {
  return word.split('').reverse().join('');
}
