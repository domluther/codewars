// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
  // Start with the first character if its a letter
  let kebabed = isLetter(str[0]) ? str[0] : '';
  for (let i = 1; i < str.length; i++) {
    const char = str[i];
    // Parse out non letters
    if (!isLetter(char)) continue;
    if (isUpper(char)) kebabed += '-';
    kebabed += char;
  }
  // Iterate through the string starting at character 1.
  // If its a capital, add a hyphen
  // Return the result in lower case
  return kebabed.toLowerCase();
  // TODO
}

function isUpper(char) {
  return char.toUpperCase() === char;
}

function isLetter(char) {
  return char.toLowerCase() !== char.toUpperCase();
}

const str1 = 'MyCamelCasedString';
const ans = kebabize(str1);
// my-camel-cased-string
console.log(ans);
