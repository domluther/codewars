// Prior to the development of T9 systems (predictive text entry), the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through all its possible values, in order. For example:

// Pressing the button 7 repeatedly will cycle through the letters P -> Q -> R -> S -> 7 -> P -> ....
// Pressing the button 0 is cycling through SPACE -> 0 -> SPACE -> 0 -> ....
// Buttons with a single symbol on it just type this symbol.
// A character is "locked in" and inserted into the message once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). For example:

// To type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7).
// To type in a digit 3, you would press the button 3 four times.
// To type in the message "ABC", you would press the button 2 once, wait a second, then press the button 2 twice to enter the letter B, then pause for another second, and press the button 2 three times, to enter the letter C. You would have to press the button 2 six times in total.
// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated...

// For this assignment, write code that can calculate the amount of button presses required for any phrase, with the following requirements:

// Punctuation can be ignored for this exercise.
// Likewise, the phone doesn't distinguish between upper and lowercase characters (but you should allow your module to accept input in either form, for convenience).
// Tested phrases contain letters (A-Z and a-z), digits (0-9), and special characters # and *.

function presses(phrase) {
  const keysNeeded = {
    0: 2,
    1: 1,
    2: 4,
    3: 4,
    4: 4,
    5: 4,
    6: 4,
    7: 5,
    8: 4,
    9: 5,
    '*': 1,
    '#': 1,
    ' ': 1,
    A: 1,
    B: 2,
    C: 3,
    D: 1,
    E: 2,
    F: 3,
    G: 1,
    H: 2,
    I: 3,
    J: 1,
    K: 2,
    L: 3,
    M: 1,
    N: 2,
    O: 3,
    P: 1,
    Q: 2,
    R: 3,
    S: 4,
    T: 1,
    U: 2,
    V: 3,
    W: 1,
    X: 2,
    Y: 3,
    Z: 4,
  };
  return phrase
    .split('')
    .reduce((acc, cur) => acc + keysNeeded[cur.toUpperCase()], 0);
}

const inp1 = 'LOL';
const inp2 = 'HOW R U';
const ans = presses(inp2);
// 9
console.log(ans);
