function capitalizeWords(array) {
  if (array.length === 0) {
    return [];
  }
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
}
console.log(capitalizeWords(["abc", "def", "ghi", "jkl"]));
