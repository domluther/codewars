// Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

// 1st octet 128 has the binary representation: 10000000
// 2nd octet 32 has the binary representation: 00100000
// 3rd octet 10 has the binary representation: 00001010
// 4th octet 1 has the binary representation: 00000001
// So 128.32.10.1 == 10000000.00100000.00001010.00000001

// Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

// Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

// Example
// "128.32.10.1" => 2149583361

// PREP
// Parameters
// A valid  IP address as a string. 4 numbers in range 0-255 separated by .s

// Return
// The 32 bit IP address converted into an integer

// Example
// 128.32.10.1 = 2149583361

function ipToInt32(ip) {
  // Take in IP + Split by .
  const splitIp = ip.split('.');
  let binary = '';
  for (let octet of splitIp) {
    // Convert each part to 8 bit binary
    const as8BitBinary = Number(octet).toString(2).padStart(8, 0);
    // Concatenate into one 32 bit binary number
    binary += as8BitBinary;
  }
  // Convert back to denary;
  return parseInt(binary, 2);
}

function ipToInt32v2(ip) {
  const splitIp = ip.split('.');
  const total = splitIp.reduce(
    // Each octet represents 256^3/2/1/0
    (acc, cur, i) => +acc + +cur * Math.pow(256, splitIp.length - 1 - i),
    0
  );
  return total;
}
const ip1 = '128.32.10.1';
const ans1 = ipToInt32v2(ip1);
// 2149583361
console.log(ans1);

const ip2 = '0.0.0.0';
const ans2 = ipToInt32v2(ip2);
// 0
console.log(ans2);

const ip3 = '128.114.17.104';
const ans3 = ipToInt32v2(ip3);
// 2154959208
console.log(ans3);
