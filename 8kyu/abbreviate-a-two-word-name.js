// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My solution

// Take in string
// Split into two words
// Take first character
// Join with a '.'
function abbrevName(name) {
  return name
    .toUpperCase()
    .split(' ')
    .map((name) => name[0])
    .join('.');
}

// Alternative
var nameArray = name.split(' ');
return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase();
