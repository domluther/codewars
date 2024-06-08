// DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  const secondsInAnHour = 60 * 60;
  const secondsInAMin = 60;
  let hours = Math.floor(seconds / secondsInAnHour);
  // Break it down little by little
  let secondsAfterHours = seconds - hours * secondsInAnHour;
  let min = Math.floor(secondsAfterHours / secondsInAMin);
  let sec = secondsAfterHours - min * secondsInAMin;

  return `${String(hours).padStart(2, 0)}:${String(min).padStart(2, 0)}:${String(sec).padStart(2, 0)}`;
}

inp = 129;
const ans = humanReadable(inp);
console.log(ans);
