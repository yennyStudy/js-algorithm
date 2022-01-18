function productOfArray(array) {
  const lastIdx = array.length - 1;
  if (lastIdx <= -1) return 1;
  return productOfArray(array.slice(0, lastIdx)) * array[lastIdx];
}
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
