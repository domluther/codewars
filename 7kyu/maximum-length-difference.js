// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

const maxDependencies = require('eslint-plugin-import/lib/rules/max-dependencies');

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

function mxdiflg(a1, a2) {
  // Either empty? -1
  if (a1.length === 0 || a2.length === 0) return -1;

  // Longest/shortest  in a1
  let minLength1 = Infinity;
  let maxLength1 = 0;
  for (let i = 0; i < a1.length; i++) {
    minLength1 = minLength1 > a1[i].length ? a1[i].length : minLength1;
    maxLength1 = maxLength1 < a1[i].length ? a1[i].length : maxLength1;
  }

  // Longest/shortest  in a2
  let minLength2 = Infinity;
  let maxLength2 = 0;
  for (let i = 0; i < a2.length; i++) {
    minLength2 = minLength2 > a2[i].length ? a2[i].length : minLength2;
    maxLength2 = maxLength2 < a2[i].length ? a2[i].length : maxLength2;
  }

  //   Difference
  return Math.max(
    Math.abs(minLength1 - maxLength2),
    Math.abs(minLength2 - maxLength1)
  );
}

let s1 = [
  'ejjjjmmtthh',
  'zxxuueeg',
  'aanlljrrrxx',
  'dqqqaaabbb',
  'oocccffuucccjjjkkkjyyyeehh',
];
let s2 = ['bbbaaayddqbbrrrv'];
const ans = mxdiflg(s1, s2);

// 13
console.log(ans);
