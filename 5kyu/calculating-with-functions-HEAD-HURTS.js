// DESCRIPTION:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// If there's a function passed into a number, run that function on the number passed in. Otherwise just return the number
function zero(fn) {
  return fn ? fn(0) : 0;
}
function one(fn) {
  return fn ? fn(1) : 1;
}
function two(fn) {
  return fn ? fn(2) : 2;
}
function three(fn) {
  return fn ? fn(3) : 3;
}
function four(fn) {
  return fn ? fn(4) : 4;
}
function five(fn) {
  return fn ? fn(5) : 5;
}
function six(fn) {
  return fn ? fn(6) : 6;
}
function seven(fn) {
  return fn ? fn(7) : 7;
}
function eight(fn) {
  return fn ? fn(8) : 8;
}
function nine(fn) {
  return fn ? fn(9) : 9;
}

function plus(b) {
  return function (a) {
    return a + b;
  };
}
function minus(b) {
  return function (a) {
    return a - b;
  };
}
function times(b) {
  return function (a) {
    return a * b;
  };
}
function dividedBy(b) {
  return function (a) {
    return Math.floor(a / b);
  };
}

// Example usage:
const ans = one(times(five()));
console.log(ans);
