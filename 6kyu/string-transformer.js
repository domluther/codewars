// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

// PREP

// Parameters - what goes in?
// A string of words, words are made of upper and lower case characters with spaces but only english characters

// Returns
// A string, upper case letters get transformed to lower case ones and vice versa. The words are reversed.

// Examples
//  Hello World -> wORLD hELLLO
// the world IS BIG -> big is WORLD THE

// Pseudocode
// Split the string by space -> words
// Go through each word, lower case character? replace with upper case. upper case -> lower case.
// Add each word to a new array
// Reverse the array
// Rejoin it

function stringTransformer(str) {
  // Split the string by space -> words
  const words = str.split(' ');
  const finalWords = [];

  // Go through each word, lower case character? replace with upper case. upper case -> lower case.
  for (const word of words) {
    // Add each word to a new array
    finalWords.push(transformWord(word));
  }

  // Reverse the array + Rejoin it
  return finalWords.reverse().join(' ');
}

function transformWord(word) {
  let newWord = '';
  for (const letter of word) {
    newWord +=
      letter.toUpperCase() === letter
        ? letter.toLowerCase()
        : letter.toUpperCase();
  }
  return newWord;
}

const inp1 = 'Hello World';
// wORLD hELLO
const inp2 = 'the world IS BIG';
// big is WORLD THE
const ans = stringTransformer(inp2);
console.log(ans);
