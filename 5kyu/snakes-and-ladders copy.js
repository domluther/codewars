// Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

// Rules
// 1.  There are two players and both start off the board on square 0.

// 2.  Player 1 starts and alternates with player 2.

// 3.  You follow the numbers up the board in order 1=>100

// 4.  If the value of both die are the same then that player will have another go.

// 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

// 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

// 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

// 8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.
// Returns
// Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

// Return Game over! if a player has won and another player tries to play.

// Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

function createSnakesLadders() {
  let positions = [0, 0];
  let currentPlayer = 0;
  const playerNames = ['Player 1', 'Player 2'];
  let playing = true;

  const ladders = {
    2: 38,
    7: 14,
    8: 31,
    15: 26,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    78: 98,
    87: 94,
  };

  const snakes = {
    16: 6,
    46: 25,
    49: 11,
    62: 19,
    64: 60,
    74: 53,
    89: 68,
    92: 88,
    95: 75,
    99: 80,
  };

  function getPlayerName() {
    return playerNames[currentPlayer];
  }

  function getCurrentPosition() {
    return positions[currentPlayer];
  }

  function makeMove(places) {
    let newPosition = getCurrentPosition() + places;

    if (newPosition === 100) {
      console.log('game over');
      playing = false;
    } else if (newPosition > 100) {
      const bounceBack = newPosition - 100;
      newPosition = 100 - bounceBack;
      console.log(`${getPlayerName()} bouncing to ${newPosition}`);
    }

    if (snakes[newPosition]) {
      console.log(`${getPlayerName()} down a snake`);
      newPosition = snakes[newPosition];
    } else if (ladders[newPosition]) {
      console.log(`${getPlayerName()} up a ladder`);
      newPosition = ladders[newPosition];
    }

    positions[currentPlayer] = newPosition;
  }

  function swapPlayer() {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
  }

  function play(die1, die2) {
    if (!playing) return 'Game over!';

    const places = die1 + die2;
    makeMove(places);

    if (getCurrentPosition() === 100) {
      return `${getPlayerName()} Wins!`;
    }

    const message = `${getPlayerName()} is on square ${getCurrentPosition()}`;

    if (die1 !== die2) {
      swapPlayer();
    }

    return message;
  }

  return { play };
}

// Usage
const game = createSnakesLadders();
console.log(game.play(1, 1));
console.log(game.play(1, 5));
console.log(game.play(6, 2));
