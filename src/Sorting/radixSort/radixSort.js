function getDigit(num, i) {
  return Math.floor((num / Math.pow(10, i)) % 10);
}
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
function radixSort(nums) {
  const mostDigitNum = mostDigits(nums);
  let buckets = Array.from(Array(10), () => []);
  for (let i = 0; i < mostDigitNum; i++) {
    for (let j = 0; j < nums.length; j++) {
      const digit = getDigit(nums[j], i);
      buckets[digit].push(nums[j]);
    }
    nums = [].concat(...buckets);
    buckets = Array.from(Array(10), () => []);
  }
  return nums;
}

radixSort([8, 6, 1, 12]);
radixSort([10, 100, 1000, 10000000]);
radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]);
