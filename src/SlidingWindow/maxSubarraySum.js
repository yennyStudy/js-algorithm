function maxSubarraySum(array, len) {
  if (array.length < len) {
    return null;
  }
  let subSum = array.reduce((acc, curValue, curIndex) => {
    return curIndex < len ? acc + curValue : acc;
  }, 0);
  let start = 0;
  let end = len;
  let maxSum = subSum;
  while (end < array.length) {
    subSum = subSum - array[start] + array[end];
    if (maxSum < subSum) {
      maxSum = subSum;
    }
    start++;
    end++;
  }
  return maxSum;
}
maxSubarraySum([100, 200, 300, 400], 2);
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2);
maxSubarraySum([2, 3], 3);
