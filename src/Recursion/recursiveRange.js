function recursiveRange(number) {
  if (number === 0) return 0;
  return recursiveRange(number - 1) + number;
}
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
