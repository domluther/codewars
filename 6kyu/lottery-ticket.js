// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// PREP

// Parameters
// Array of 3 subarrays. Each subarray has a string with some characters (3-5?) at [0] and an integer representing the code [1]
// An integer representing the number of wins needed

// Return
// return 'Winner!' or 'Loser!' depending if number of wins is >= wins needed

function bingo(tickets, win) {
  // Keeps track fo the number of wins
  let wins = 0;
  //   Iterate through each ticket
  for (let ticket of tickets) {
    // What's the winning character?
    const winningCharacter = String.fromCharCode(ticket[1]);
    // Is it in there? Yes, it's a win
    if (ticket[0].includes(winningCharacter)) {
      wins++;
    }
  }

  //   Beat the threshold? Winner! otherwise Loser!
  return wins >= win ? 'Winner!' : 'Loser!';
}

// Examples
const ans1 = bingo(
  [
    ['ABC', 65],
    ['HGR', 74],
    ['BYHT', 74],
  ],
  2
);
// Loser as only 1 win
console.log(ans1);

const ans2 = bingo(
  [
    ['ABC', 65],
    ['HGR', 74],
    ['BYHT', 74],
  ],
  1
);
// Winner
console.log(ans2);
