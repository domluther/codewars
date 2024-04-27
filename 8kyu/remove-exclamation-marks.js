// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My solution
// Split string to array
// Filter out anything that's a !
// Rejoin it

function removeExclamationMarks(s) {
  return s
    .split('')
    .filter((char) => char !== '!')
    .join('');
}

// Replace method
function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}
