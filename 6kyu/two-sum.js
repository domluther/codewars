// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

// My solution
// Two nested loops
function twoSum(numbers, target) {
  for (let num1 = 0; num1 < numbers.length; num1++) {
    for (let num2 = 1; num2 <= numbers.length; num2++) {
      if (numbers[num1] + numbers[num2] === target) return [num1, num2];
    }
  }
}

// Faster solution
function twoSum(numbers, target) {
  // Hash map to keep track of the indices of the values
  let myMap = {};
  for (let i = 0; i < numbers.length; i++) {
    // What I'm looking for is the difference between the target and the current value
    let lookingFor = target - numbers[i];
    // Is it in my map already? If so return the pair
    if (myMap[lookingFor] !== undefined) return [myMap[lookingFor], i];
    //   Not in my map? Then add the value + index to the array
    myMap[numbers[i]] = i;
  }
}
