// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  const tower = [];
  // Each floor has spaces, stars and spaces.
  //   Number of stars is floor*2 - 1
  for (let floor = 1; n <= nFloors; floor++) {
    tower.push(
      `${' '.repeat(nFloors - floor)}${'*'.repeat(floor * 2 - 1)}${' '.repeat(nFloors - floor)}`
    );
  }
  return tower;
}
