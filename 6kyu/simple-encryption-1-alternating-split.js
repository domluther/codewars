// DESCRIPTION:
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (!text || n < 1) return text;
  // Repeat n times
  for (let i = 1; i <= n; i++) {
    let leftHalf = '';
    let rightHalf = '';
    // Odd indexed go in the left half, even indexed go in the right half
    text.split('').forEach((element, i) => {
      if (i % 2 === 0) rightHalf += element;
      else leftHalf += element;
    });
    text = leftHalf + rightHalf;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n < 1) return encryptedText;

  //   // Repeat n times
  for (let i = 1; i <= n; i++) {
    // Split text in two
    let leftHalf = encryptedText.slice(0, encryptedText.length / 2);
    let rightHalf = encryptedText.slice(encryptedText.length / 2);
    //   To decrypt you alternate RLRLRLRL
    encryptedText = '';
    // right half could be longer due to the way the maths is done - so could have an undefined, this catches it
    for (let i = 0; i < rightHalf.length; i++) {
      encryptedText += rightHalf.at(i) || '';
      encryptedText += leftHalf.at(i) || '';
    }
  }
  return encryptedText;
}

const encrypted = encrypt('012345', 3);
console.log(encrypted);
const decrypted = decrypt('This is a test!', 1);
console.log(decrypted);
