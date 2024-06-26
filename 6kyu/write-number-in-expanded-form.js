// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  numString = String(num);
  return (
    numString
      .split('')
      .map((num, index) => Math.pow(10, numString.length - index - 1) * num)
      // Don't want 0s in final answer
      .filter((value) => value > 0)
      .join(' + ')
  );
}

console.log(expandedForm(1023));

// With reverses
const expandedForm = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(' + ');
