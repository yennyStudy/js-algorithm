function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return factorial(n - 1) * n;
}
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(10)); // 5040
