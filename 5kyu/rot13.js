// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//
function rot13(message) {
  return (shifted = message
    .split('')
    .map((c) => shift(c))
    .join(''));
}

function shift(char) {
  const originalASCII = char.charCodeAt(0);
  const capitalASCIILowerBound = 'A'.charCodeAt(0);
  const capitalASCIIUpperBound = 'Z'.charCodeAt(0);
  const lowerASCIILowerBound = 'a'.charCodeAt(0);
  const lowerASCIIUpperBound = 'z'.charCodeAt(0);
  const shiftAmount = 13;
  let desiredASCII = originalASCII + shiftAmount;
  console.log(originalASCII);
  //   lower case
  if (
    originalASCII >= capitalASCIILowerBound &&
    originalASCII <= capitalASCIIUpperBound
  ) {
    if (desiredASCII > capitalASCIIUpperBound) {
      desiredASCII =
        (desiredASCII % capitalASCIIUpperBound) + capitalASCIILowerBound - 1;
    }
    return String.fromCharCode(desiredASCII);
  }
  if (
    originalASCII >= lowerASCIILowerBound &&
    originalASCII <= lowerASCIIUpperBound
  ) {
    if (desiredASCII > lowerASCIIUpperBound) {
      desiredASCII =
        (desiredASCII % lowerASCIIUpperBound) + lowerASCIILowerBound - 1;
    }
    return String.fromCharCode(desiredASCII);
  } else {
    return char;
  }
}

// Could have simplified the conversion to

String.fromCharCode(
  ((originalASCII - capitalASCIILowerBound + 13) % 26) + capitalASCIILowerBound
);

// Could have just made fixed lookups
function rot13(message) {
  var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}
