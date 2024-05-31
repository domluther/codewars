// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length
// a positive integer width
// You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.

// Examples in general form:
// (depending on the language)

//   sqInRect(5, 3) should return [3, 2, 1, 1]
//   sqInRect(3, 5) should return [3, 2, 1, 1]

function sqInRect(length, width) {
  // Already a square? Return null
  if (length === width) return null;
  const sizes = [];
  // Split up into squares by saying which is the shortest side, making a square of that and then seeing what is left. This is repeated while there are squares left.
  while (length > 0 && width > 0) {
    if (width < length) {
      sizes.push(width);
      length -= width;
    } else if (length < width) {
      sizes.push(length);
      width -= length;
    } else {
      sizes.push(length);
      length -= length;
    }
  }
  return sizes;
}

const ans = sqInRect(8, 5);
console.log(ans);
