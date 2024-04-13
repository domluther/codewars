// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Last x characters are the same as the ending
function solution(str, ending) {
  if (ending === '') return true;
  return ending === str.slice(-ending.length);
}
