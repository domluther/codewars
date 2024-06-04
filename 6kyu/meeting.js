// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
  // Split into an uppercase list of people
  const people = s.toUpperCase().split(';');

  // Split the people and put the order right
  const splitPeople = people.map((person) => person.split(':').reverse());
  console.log(splitPeople);
  const sorted = splitPeople.sort((firstPerson, secondPerson) => {
    // Sort by surname
    if (firstPerson[0] < secondPerson[0]) {
      return -1;
      // If surname is equal, then sort by first name
    } else if (firstPerson[0] === secondPerson[0]) {
      if (firstPerson[1] < secondPerson[1]) return -1;
    } else return 1;
  });
  return sorted.map((person) => `(${person[0]}, ${person[1]})`).join('');
}

console.log(meeting2(s));

s =
  'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn';
const expected =
  '(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)';
const ans = meeting(s);
console.log(ans === expected);
console.log(ans);

// Shortened - if you join before you sort then it saves the hassle of sorting by surname + first name
function meeting2(s) {
  const people = s
    .toUpperCase()
    .split(';')
    .map((person) => person.split(':').reverse().join(', '));
  return `(${people.sort().join(')(')})`;
}
