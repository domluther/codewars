// DESCRIPTION:
// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  // Treat it as a stack. Push values in and # means pop off stack
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') stack.pop();
    else stack.push(s[i]);
  }
  return stack.join('');
}

const ans = cleanString('abc#d##c');
// ac
console.log(ans);
