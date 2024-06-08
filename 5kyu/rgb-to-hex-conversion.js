// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  let inHex = '';
  const values = [r, g, b];
  for (value of values) {
    // Values out of range? Cap them.
    if (value < 0) value = 0;
    if (value > 255) value = 255;
    inHex += convertToHex(value);
  }

  return inHex;
}

const convertToHex = (value) => {
  const hexMap = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };
  let sixteens = Math.floor(value / 16);
  let ones = value % 16;
  return `${hexMap[sixteens]}${hexMap[ones]}`;
};

const ans = rgb(255, 255, 255);

console.log(ans);
