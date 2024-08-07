// The aim of the kata is to decompose n! (factorial n) into its prime factors.

// Examples:

// n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
// since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

// n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

// n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
// Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

// Notes

// the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
// factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).

// PREP
// Parameters
// A positive integer representing the factorial

// Return the prime factors of the number as a string.

// Examples
// 12 -> 2^10 * 3^5 * 5^2 * 7 * 11

// Pseudocode
// Rewatch https://www.youtube.com/watch?v=mUW6tP105Es and turn that into pseudocode

// Used to keep track of found primes and speed up algorithms
const primes = [2];

function decomp(n) {
  let msg = '';
  const factorMap = {};
  // Iterate through the numbers from 2 to n
  for (let num = 2; num <= n; num++) {
    if (isPrime(num)) {
      // Prime? Add to map
      factorMap[num] = (factorMap[num] ?? 0) + 1;
    } else {
      // Not prime?
      // Factor to primes.
      const values = factorToPrimes(num);
      for (const value of values) {
        factorMap[value] = (factorMap[value] ?? 0) + 1;
      }
      // Add to map
    }
  }
  // Turn map into formatted string
  return mapToString(factorMap);
}

function factorToPrimes(num) {
  const factors = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  if (num > 1) {
    factors.push(num);
  }

  return factors;
}

function isPrime(n) {
  // Check known primes first
  if (primes.includes(n)) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  primes.push(n);
  return true;
}

function mapToString(map) {
  let msg = '';
  // Will need to order them so highest power comes first
  for (const key of Object.keys(map)) {
    if (map[key] === 1) {
      msg += ` * ${key}`;
    } else {
      msg += ` * ${key}^${map[key]}`;
    }
  }
  return msg.replace('*', '').trim();
}

const ans1 = decomp(2);
console.log(ans1);

const ans2 = decomp(3);
console.log(ans2);

const ans3 = decomp(22);
console.log(ans3);

console.log(factorToPrimes(15));
