// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
  // Convert to binary
  const binary = n.toString(2);
  // How many 1s are in the string?
  return binary
    .split('')
    .reduce((acc, cur) => (cur === '1' ? acc + 1 : acc), 0);
};

// Smart option - split by 0s
countBits = (n) => n.toString(2).split('0').join('').length;

// My alternate solution
var countBits = function (n) {
  // Convert to binary
  return n.toString(2).replaceAll('0', '').length;
};
