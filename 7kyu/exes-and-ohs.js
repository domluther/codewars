// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution
// Filter down to xs length, filter down to os length, same?
function XO(str) {
  let xs = str
    .toLowerCase()
    .split('')
    .filter((char) => char === 'x').length;
  let os = str
    .toLowerCase()
    .split('')
    .filter((char) => char === 'o').length;
  return xs === os;
}

// Using regex
function XO(str) {
  // /x/gi means g means all, i means case insensitive
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
