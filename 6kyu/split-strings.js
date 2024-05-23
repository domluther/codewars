// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
function solution(str) {
  const pairs = [];
  for (let i = 0; i < str.length; i = i + 2) {
    // Slice the next two characters
    let pair = str.slice(i, i + 2);
    // Last pair won't be a pair so append a _
    pair.length === 2 ? pairs.push(pair) : pairs.push(pair + '_');
  }

  return pairs;
}

// Alternative
// Could have made sure the string is an even number of characters, faster as only one if instead of repeated
