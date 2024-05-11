// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// My solution

// Iterate throguh the word
// If it's not a space, capitalise just that letter by using slicing
function wave(str) {
  const words = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      words.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return words;
}
