// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) {
  // Slower way - iterate through - filter out non latin letters and push into array that you then join at the end
  //coding and coding..
  //   Replace using regex
  return str
    .replace(/([^a-z])/g, '')
    .split('')
    .reverse()
    .join('');
}

const ans = reverseLetter('haFOK3llo3i');
console.log(ans);
