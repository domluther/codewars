// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// My solution

function solution(str) {
  return str.split('').reverse().join('');
}

// Alternative

// Using [...] spread instead of split
// const solution = s => [...s].reverse().join('')
