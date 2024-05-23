// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  const sqrt = Math.floor(Math.sqrt(integer));
  const answer = [];

  //   Start at 2 because we don't want 1 + the number itself
  for (let i = 2; i <= sqrt; i++) {
    if (integer % i === 0) {
      answer.push(i);
      answer.push(integer / i);
    }
  }
  //   Need to sort because when I push in I do both sides of it. Would it be faster just to iterate the whole way and add it with no need for a sort?
  return answer.length === 0
    ? `${integer} is prime`
    : answer.sort((a, b) => a - b);
}
