function minSubArrayLen(array, len) {
  let sum = 0;
  let minLen = array.length;
  array.forEach((item) => (sum += item));
  let start = 0;
  let end = len;
  while (1) {
    if (array[start] < array[end]) {
    }
  }
}
minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
minSubArrayLen([2, 1, 6, 5, 4], 9);
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52);
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95);
