// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  const map = {};
  let maxCount = 0;
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    // Count value of each one
    map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
    // New high count? Update the count + highest value - this makes it messier but all done inside this loop
    if (map[arr[i]] > maxCount) {
      maxCount = map[arr[i]];
      highest = arr[i];
    }
    // If it's the same, is it a larger number?
    if (map[arr[i]] === maxCount) {
      if (arr[i] > highest) {
        highest = arr[i];
      }
    }
  }
  return highest;
}

const arrIn = [1, 2, 3, 4, 5];
const ans = highestRank(arrIn);
console.log(ans);
// 12

// Clean way to update a map. Setting it to 0 means it's always an update
// arr.forEach(function(elem){
//     if(obj[elem] === undefined)
//       obj[elem] = 0;
//     obj[elem]++;
