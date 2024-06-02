// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]
// Return the output array, and ignore all non-op characters
function parse(data) {
  // Array to hold the values
  const ans = [];
  // Variable to hold the value in
  let val = 0;
  //   Parse one at a time
  for (let i = 0; i < data.length; i++) {
    // Switch case is neater than if/else here
    switch (data[i]) {
      case 'i':
        val++;
        break;
      case 'd':
        val--;
        break;
      case 's':
        val = Math.pow(val, 2);
        break;
      case 'o':
        ans.push(val);
    }
  }
  return ans;
}

const ans = parse('iiisdoso');
console.log(ans);

// Using reduce
function parse(data) {
  let res = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2);
    if (s === 'o') res.push(cur);

    return cur;
  }, 0);

  return res;
}
