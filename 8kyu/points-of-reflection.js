// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

// Task
// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.

// This kata was inspired by the Hackerrank challenge Find Point

// My solution
function symmetricPoint(p, q) {
  //   No idea what the words meant but the samples meant this
  return [q[0] * 2 - p[0], q[1] * 2 - p[1]];
}

// Destructuring to make it cleaner
// const symmetricPoint = ([a, b], [c, d]) => [c * 2 - a, d * 2 - b];
