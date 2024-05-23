// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function solution(string) {
  if (string.toLowerCase() === string) return string;
  const originalStringLength = string.length;
  for (let i = originalStringLength - 1; i > 0; i--) {
    // If it's a capital
    if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) {
      // Insert a space at the right place
      string = string.slice(0, i) + ' ' + string.slice(i);
    }
  }
  return string;
}

// Cleaner
// Replace capitals with a space followed by a capital
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}
