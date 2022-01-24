function findAllDuplicates(arr) {
  let frequencyObj = {};
  const result = [];
  for (const item of arr) {
    !!frequencyObj[item] ? frequencyObj[item]++ : (frequencyObj[item] = 1);
    if (frequencyObj[item] === 2) {
      result.push(item);
    }
  }
  return result;
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
findAllDuplicates([4, 3, 2, 1, 0]);
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]);
