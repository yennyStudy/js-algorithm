function isSubsequence(a, b) {
  let aPointer = 0;
  let bPointer = 0;
  while (bPointer < b.length) {
    if (a[aPointer] === b[bPointer]) {
      aPointer++;
    }
    bPointer++;
  }
  if (aPointer < a.length) {
    return false;
  }
  return true;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
