// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
  // Iterate through word
  // Check char - if it is uppercase then add to array
  const output = [];
  word
    .split('')
    .forEach((char, index) =>
      char.toUpperCase() === char ? output.push(index) : ''
    );

  return output;
};

const ans = capitals('CodEWaRs');
console.log(ans);

// Note - wouldn't work if there were numbers - would need to eg check if charCode in range 65 - 90
