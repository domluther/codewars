// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces) {
  // Split string into an array
  const splitBraces = braces.split('');
  const leftBraces = [];
  for (let i = 0; i < splitBraces.length; i++) {
    //   Is it a left one? Add to a stack
    if (isLeftBrace(splitBraces[i])) {
      leftBraces.push(splitBraces[i]);
    } else {
      //   Is it a right one? Pop from stack, is it a valid pair?
      if (!isValidPair(leftBraces.pop(), splitBraces[i])) return false;
    }
  }
  // Left braces should be empty
  return leftBraces.length === 0;
}

function isLeftBrace(brace) {
  return brace === '(' || brace === '[' || brace === '{';
}

function isValidPair(leftBrace, rightBrace) {
  const braceMap = { '{': '}', '(': ')', '[': ']' };
  return braceMap[leftBrace] === rightBrace;
}

console.log(validBraces('()'));

// Cleaner solution
function validBracesAlt(braces) {
  const stack = [];
  // Iterate through the braces
  for (var i = 0; i < braces.length; i++) {
    switch (braces[i]) {
      // Opening brace? Push to stack
      case '(':
      case '[':
      case '{':
        stack.push(braces[i]);
        break;
      // Right hand one? Doesn't match? Return false
      case ')':
        if (stack.pop() != '(') return false;
        break;
      case ']':
        if (stack.pop() != '[') return false;
        break;
      case '}':
        if (stack.pop() != '{') return false;
        break;
    }
  }
  //   Stack should be empty
  return stack.length == 0;
}

const ans = validBracesAlt('()');
console.log(ans);
