//arguments object(ES5)
//argument is local JavaScript object variable
//that is available in all none-arrow functions.
function areThereDuplicates() {
  const frequencyObj = {};
  for (const arg of Object.values(arguments)) {
    frequencyObj[arg] ? frequencyObj[arg]++ : (frequencyObj[arg] = 1);
    if (frequencyObj[arg] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2));
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
