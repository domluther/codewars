// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

// Done using iteration instead of recusion
function factorial(n) {
  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}

const ans = factorial(4);

console.log(ans);
