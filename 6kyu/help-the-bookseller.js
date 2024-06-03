// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"}
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

function stockList(listOfArt, listOfCat) {
  // If L or M are empty return string is ""
  if (listOfArt.length === 0) return '';
  // Iterate through the list of Cat -> create a map setting all the values to 0 (needed as can have empty cats)
  const catMap = {};
  for (let i = 0; i < listOfCat.length; i++) {
    catMap[listOfCat[i]] = 0;
  }
  // Iterate through list art, update map
  for (let i = 0; i < listOfArt.length; i++) {
    // Makes following line easier to read
    const code = listOfArt[i];
    // First character of code = entry in map, value is 2nd half of code cast to a Number
    // Undefined checks if it is in the map already
    if (catMap[code[0]] !== undefined) {
      catMap[code[0]] += Number(code.split(' ')[1]);
    }
  }
  // Create bracketed value pairs
  let outputPairs = [];
  for (const cat in catMap) {
    outputPairs.push(`(${cat} : ${catMap[cat]})`);
  }
  //   Put - between them all
  return outputPairs.join(' - ');
}

b = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
c = ['A', 'B'];
const ans = stockList(b, c);

console.log(ans);
