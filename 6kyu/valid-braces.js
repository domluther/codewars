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
  let valid = true;
  // Split string into an array
  const splitBraces = braces.split('');
  const leftBraces = [];
  //   Is it a left one? Add to a stack
  for (let i = 0; i < splitBraces.length; i++) {
    // Add to stack
    if (isLeftBrace(splitBraces[i])) {
      leftBraces.push(splitBraces[i]);
    } else {
      //   Is it a right one? Pop from stack, is it a valid pair?
      if (!isMatch(leftBraces.pop(), splitBraces[i])) return false;
    }
  }
  // Left braces should be empty
  return leftBraces.length === 0;
}

function isLeftBrace(brace) {
  return brace === '(' || brace === '[' || brace === '{';
}

function isMatch(leftBrace, rightBrace) {
  return (
    (leftBrace === '(' && rightBrace === ')') ||
    (leftBrace === '{' && rightBrace === '}') ||
    (leftBrace === '[' && rightBrace === ']')
  );
}

toTest = '[(';
console.log(validBraces(toTest));
