function capitalizeFirst(array) {
  if (array.length === 0) return [];
  let first = [array[0][0].toUpperCase() + array[0].slice(1)];
  return first.concat(capitalizeFirst(array.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
