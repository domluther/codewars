// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

// var countDeafRats = function (town) {
//   console.log(town);
//   townSplit = town.split('P');
//   const sides = [];
//   sides.push(...townSplit[0].split('~O'));
//   sides.push(...townSplit[1].split('O~'));
//   const filtered = sides.filter((val) => val.trim() != '');
//   console.log(filtered);
//   return filtered.length;
// };

var countDeafRats = function (town) {
  townSplit = town.split('P');

  //   Left hand side of town
  //   ~O is OK
  let leftHandSide = [...townSplit[0]].join('');
  for (let i = leftHandSide.length - 1; i > 0; i--) {
    console.log(leftHandSide);
    const charOfInterest = leftHandSide[i];
    if (charOfInterest === 'O') {
      // And the character to the left of it is an O
      if (leftHandSide[i - 1] === '~' && leftHandSide[i + 1] !== 'O') {
        leftHandSide =
          leftHandSide.substring(0, i - 1) + leftHandSide.substring(i + 1);
      }
    }
  }

  //   Right hand side of town
  //   O~ is OK
  let rightHandSide = [...townSplit[1]].join('');
  for (let i = rightHandSide.length - 1; i > 0; i--) {
    const charOfInterest = rightHandSide[i];
    if (charOfInterest === '~') {
      // And the character to the left of it is an O
      if (rightHandSide[i - 1] === 'O' && rightHandSide[i + 1] !== 'O') {
        rightHandSide =
          rightHandSide.substring(0, i - 1) + rightHandSide.substring(i + 1);
      }
    }
  }
  merged = leftHandSide + rightHandSide;
  return merged.split('O').length - 1;
};

const inp1 = '~O~O~O~O P';
// 0

const inp2 = 'P O~ O~ ~O O~';
// 1

const inp3 = '~O~O~O~OP~O~OO~';
// 2
const inp4 = 'O~~O~O~O~~OO~~OO~~OO~P~OO~~OO~~OO~~O';
// 2

console.log(countDeafRats(inp4));

// I failed. This works.
var countDeafRats = function (town) {
  let deafs = 0;
  let ident = 'O';
  for (let i = 0; i < town.length; i++) {
    if (town[i] === 'P') {
      ident = '~';
    }
    if (town[i] === ident) {
      deafs++;
    }
    if (town[i] === '~' || town[i] === 'O') {
      i++;
    }
  }
  return deafs;
};
