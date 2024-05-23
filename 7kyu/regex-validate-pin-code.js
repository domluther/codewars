// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

//  ^ start of string
// a number
// {4} of them
// $ end of string
function validatePIN(pin) {
  const fourDigit = /^[0-9]{4}$/;
  const sixDigit = /^[0-9]{6}$/;
  return fourDigit.test(pin) || sixDigit.test(pin);
}

//  \d is search for digit
// Could have been combined into one pattern but harder to read
^[\d]{4}$|^[\d]{6}$