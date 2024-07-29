// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

// PREP
// Parameters
// Input is a string containing only letters. The letters will be a mix of upper and lower case letters. There will only be a single instance of upper case letters and can be multiple lower case.

// Returns
// A string in 'order' Capital letter followed by all lower case of that same letter. Capital letters should be in alphabetical order.

// Examples
// 'AabbaBa' -> 'AaaaBbb'
// 'cefFCE' -> 'CcEeFf'

function findChildren(dancingBrigade) {
  const upperArr = [];
  const lowerMap = {};

  for (const letter of dancingBrigade) {
    if (letter.toUpperCase() === letter) {
      upperArr.push(letter);
    } else {
      console.log(letter);
      lowerMap[letter] = lowerMap[letter] ? (lowerMap[letter] += 1) : 1;
    }
  }
  let output = '';
  upperArr.sort();
  for (const upperChar of upperArr) {
    output += upperChar;
    lowerChar = upperChar.toLowerCase();
    output += lowerChar.repeat(lowerMap[lowerChar]);
  }
  return output;
}

function findChildren2(inp) {
  // Sort the letters
  const sorted = inp.toLowerCase().split('').sort();
  let output = '';
  let last = '';

  //   If it's the same as the last one, then it's a lowercase. Otherwise it's uppercase time.
  for (const letter of sorted) {
    if (last === letter) {
      output += letter;
      last = letter;
    } else {
      output += letter.toUpperCase();
      last = letter;
    }
  }
  return output;
}

const inp1 = 'AabbaBa';
const ans1 = findChildren2(inp1);
console.log(ans1);
const inp2 = 'cefFCE';
const ans2 = findChildren2(inp2);
console.log(ans2);
