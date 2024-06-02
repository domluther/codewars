// DESCRIPTION:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

multiplicationTable = function (size) {
  const ans = [];
  // 2d array is easiest option

  for (let i = 1; i <= size; i++) {
    let tempArr = [];
    for (let j = 1; j <= size; j++) {
      tempArr.push(i * j);
    }
    ans.push(tempArr);
  }
  return ans;
};

const ans = multiplicationTable(3);
console.log(ans);
