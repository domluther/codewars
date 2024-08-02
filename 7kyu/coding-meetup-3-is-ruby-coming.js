// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];

// PREP
// Parameters
// An array of dev objects

// Returns
// boolean about if there are any ruby developers

// Example
// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// True because Emma is a Ruby developer

// Pseudocode
// use some() to iterate through the array - returns t/f if condition is true

function isRubyComing(list) {
  return list.some((dev) => dev.language === 'Ruby');
}

var list1 = [
  {
    firstName: 'Emma',
    lastName: 'Z.',
    country: 'Netherlands',
    continent: 'Europe',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'Piotr',
    lastName: 'B.',
    country: 'Poland',
    continent: 'Europe',
    age: 128,
    language: 'Javascript',
  },
  {
    firstName: 'Jayden',
    lastName: 'P.',
    country: 'Jamaica',
    continent: 'Americas',
    age: 42,
    language: 'JavaScript',
  },
];

const ans = isRubyComing(list1);
console.log(ans);
