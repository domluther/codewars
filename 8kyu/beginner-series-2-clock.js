// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// My solution

function past(h, m, s) {
  const MINUTES_IN_AN_HOUR = 60;
  const SECONDS_IN_A_MINUTE = 60;
  const MILLISECONDS_IN_A_SECOND = 1000;

  m += h * MINUTES_IN_AN_HOUR;
  s += m * SECONDS_IN_A_MINUTE;
  return s * MILLISECONDS_IN_A_SECOND;
}

// Using date
function past(h, m, s) {
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);

  return Math.round(setTime - midnight);
}
