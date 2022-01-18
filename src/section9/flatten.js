function flatten(array) {
  if (array.length === 0) return [];
  else if (Array.isArray(array[0])) {
    return flatten(array[0].concat(array.slice(1)));
  } else {
    return [array[0]].concat(flatten(array.slice(1)));
  }
}
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
