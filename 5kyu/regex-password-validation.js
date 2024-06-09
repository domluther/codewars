// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)

// assign your RegExp to REGEXP:
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

// ^ start of the string
// (?=.*[a-z]) positive lookahead - must contain one or more lowercase letters
// (?=.*[A-Z]) positive lookahead - must contain one or more uppercase letters
// (?=.*\d) positive lookahead - must contain one or more digit
// [A-Za-z\d]{6,} - 6 or more alphanumeric characters. didn't use \w as that includes _
// $ end of the string
