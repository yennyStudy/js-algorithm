function digitCount(num) {
  return num.toString().length;
}
function mostDigits(nums) {
  let mostDigitNum = 0;
  for (const num of nums) {
    mostDigitNum = Math.max(digitCount(num), mostDigitNum);
  }
  return mostDigitNum;
}

mostDigits([1, 9, 10, 100, 99]);
mostDigits([100, 1010, 1, 500]);
mostDigits([0, 100000, 400, 12, 8]);
mostDigits([]);
