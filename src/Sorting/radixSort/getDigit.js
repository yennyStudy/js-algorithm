function getDigit(num, i) {
  return Math.floor((num / Math.pow(10, i)) % 10);
}

getDigit(12345, 0);
getDigit(12345, 1);
getDigit(12345, 2);
getDigit(12345, 3);
getDigit(12345, 4);
getDigit(12345, 5);

getDigit(8987, 0);
getDigit(8987, 1);
getDigit(8987, 2);
getDigit(8987, 3);
getDigit(8987, 4);
