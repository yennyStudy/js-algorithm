//frequency counter
function findPair(arr, num) {
  let frequencyObj = {};
  for (const item of arr) {
    if (!!frequencyObj[item - num] || !!frequencyObj[item + num]) {
      return true;
    }
    !!frequencyObj[item] ? frequencyObj[item]++ : (frequencyObj[item] = 1);
  }
  return false;
}

//multiple pointer
// function findPair(arr, num) {
//   const sortedArr = arr.sort((a, b) => a - b);
//   console.log(sortedArr);
// }

findPair([6, 1, 4, 10, 2, 4], 2);
findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1);
findPair([4, -2, 3, 10], -6);
findPair([6, 1, 4, 10, 2, 4], 22);
findPair([], 0);
findPair([5, 5], 0);
findPair([-4, 4], -8);
findPair([-4, 4], 8);
findPair([1, 3, 4, 6], -2);
