// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.
// Given a number N , calculate its primorial.

// PREP
// Parameters
// An integer representing the number of primes to calculate and then multiply together

// Returns
// The primorial - the product of the first n primes

// Examples
// 2 => 2 * 3 = 6
// 3 => 2 * 3 * 5 = 30
// 4 => 2 * 3 * 5 * 7 = 210
// 5 => 2 * 3 * 5 * 7 * 11 = 2310
// 6 => 2 * 3 * 5 * 7 * 11 * 13 = 30,030

// Pseudocode
// Calculate the first n primes
// Multiply them together

function numPrimorial(n) {
  let product = 1;
  let primeCount = 0;
  //   1 isn't prime, so no reason to start there
  let initialValue = 2;
  // Not enough primes? Keep going
  while (primeCount < n) {
    // Is the value prime?
    const prime = isPrime(initialValue);
    // If it is, increase the product
    if (prime) {
      primeCount++;
      product *= initialValue;
    }
    // Need to check the next value
    initialValue++;
  }
  return product;
}

function isPrime(num) {
  // Base case - 2 is prime
  if (num === 2) return true;
  // Even numbers aren't prime
  if (num % 2 === 0) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(numPrimorial(2));
// 6
console.log(numPrimorial(3));
// // 30
console.log(numPrimorial(4));
// // 210
console.log(numPrimorial(5));
// // 2310
console.log(numPrimorial(6));
// // 30030
