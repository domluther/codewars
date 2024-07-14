// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  return s
    .split('')
    .map(
      (char, index) =>
        `${char.toUpperCase()}${char.toLowerCase().repeat(index)}`
    )
    .join('-');
}

const inp = 'abcd';
console.log(accum(inp));
