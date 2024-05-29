// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  // Create all the squares in range 0 to n (+1 on n as zero indexed). Create as strings because will be used as them later.
  const squares = Array.from({ length: n + 1 }, (num, index) =>
    String(Math.pow(index, 2))
  );
  console.log(squares);
  //   Iterate through the numbers, how many times does the digit d appear - use split to take this into account and count the number of parts
  //   1 taken away as eg  splitting 100 by 1 gives you 1 and 00
  let count = 0;
  return squares.reduce((acc, cur) => acc + cur.split(d).length - 1, 0);

  //    for (let i = 0; i < squares.length; i++) {
  //     count += squares[i]
  //       .split('')
  //       .reduce((acc, cur) => (cur == d ? acc + 1 : acc), 0);
  //   }
  //   return count;
}

// Shorter - concatenate all the digits and then split that way.
// As I don't care about the numbers themselves, this is much more efficient
function concatDigit(n, d) {
  let all = '';
  for (let i = 0; i <= n; i++) {
    all += Math.pow(i, 2);
  }
  return all.split(d).length - 1;
}

const ans = nbDig(5750, 0);
console.log(ans);
let ans2 = concatDigit(575002, 9);
console.log(ans2);
