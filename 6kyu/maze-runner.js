// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.

function mazeRunner(maze, directions) {
  // Find the start point co-ordinates
  let x;
  let y;
  const startMarker = 2;
  //   It's a square
  const mazeSize = maze.length;

  //   Iterate through the 2d array looking for the start place
  for (let mazeX = 0; mazeX < mazeSize; mazeX++) {
    for (let mazeY = 0; mazeY < mazeSize; mazeY++) {
      if (maze[mazeX][mazeY] === startMarker) {
        x = mazeX;
        y = mazeY;
        break;
      }
    }
  }
  // Follow the directions and check where you are
  for (const direction of directions) {
    // Adjust current position based on movement
    switch (direction) {
      case 'N':
        x -= 1;
        break;
      case 'E':
        y += 1;
        break;
      case 'S':
        x += 1;
        break;
      case 'W':
        y -= 1;
        break;
      default:
        break;
    }

    // Check state of current position
    const state = getState(maze, x, y);
    if (state === 1) return 'Dead';
    if (state === 3) return 'Finish';
  }
  return 'Lost';
  // Code here
}

function getState(maze, x, y) {
  // Out of bounds
  if (x < 0 || y < 0) return 1;
  if (x >= maze.length || y >= maze.length) return 1;
  // In bounds so what is the state here?
  return maze[x][y];
}

// Test data
const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

console.log(maze[9][3] == undefined);

const directions1 = ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'];
const directions2 = [
  'N',
  'N',
  'N',
  'N',
  'N',
  'E',
  'E',
  'S',
  'S',
  'E',
  'E',
  'N',
  'N',
  'E',
];
const directions3 = [
  'N',
  'N',
  'N',
  'N',
  'N',
  'E',
  'E',
  'E',
  'E',
  'E',
  'W',
  'W',
];
const directions4 = ['N', 'N', 'N', 'W', 'W'];
const directions5 = [
  'N',
  'N',
  'N',
  'N',
  'N',
  'E',
  'E',
  'S',
  'S',
  'S',
  'S',
  'S',
  'S',
];
const directions6 = ['N', 'E', 'E', 'E', 'E'];
const ans = mazeRunner(maze, directions6);

console.log(ans);
