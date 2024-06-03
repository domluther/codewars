// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

function rowWeights(array) {
  let teamOneWeight = 0;
  let teamTwoWeight = 0;

  // Iterate through the array, add up alternate digits (could do with reduce in 1 line)
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    // Shorter with a ternary
    i % 2 === 0 ? (teamOneWeight += value) : (teamTwoWeight += value);
  }

  return [teamOneWeight, teamTwoWeight];
}

const ans = rowWeights([80]);
console.log(ans);
