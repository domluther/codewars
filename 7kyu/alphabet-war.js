// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example
// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight) {
  // Iterate through. Increase/decrease score based on letter
  // Instead of having 2 variables - one where you count up + down is simpler
  let scoreMap = { w: 4, p: 3, b: 2, s: 1, m: -4, q: -3, d: -2, z: -1 };
  let score = 0;

  for (let i = 0; i < fight.length; i++) {
    // What's the score for the letter? Not in map = undefined => 0
    let letterScore = scoreMap[fight[i]] || 0;
    score += letterScore;
  }
  return score > 0
    ? 'Left side wins!'
    : score < 0
      ? 'Right side wins!'
      : "Let's fight again!";
}

const ans = alphabetWar('hellow');
console.log(ans);

// Nice way of doing it with a switch case
function alphabetWar(fight) {
  let score = 0;
  for (const letter of fight) {
    switch (letter) {
      case 'w':
        score -= 4;
        break;
      case 'p':
        score -= 3;
        break;
      case 'b':
        score -= 2;
        break;
      case 's':
        score -= 1;
        break;
      case 'm':
        score += 4;
        break;
      case 'q':
        score += 3;
        break;
      case 'd':
        score += 2;
        break;
      case 'z':
        score += 1;
        break;
    }
  }

  return score < 0
    ? 'Left side wins!'
    : score > 0
      ? 'Right side wins!'
      : "Let's fight again!";
}
