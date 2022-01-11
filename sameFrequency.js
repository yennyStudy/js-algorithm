function sameFrequency(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();
  if (stringA.length !== stringB.length) return false;

  let frequencyObj = {};
  for (const charA of stringA) {
    frequencyObj[charA] ? frequencyObj[charA]++ : (frequencyObj[charA] = 1);
  }
  for (const charB of stringB) {
    if (!frequencyObj[charB]) {
      return false;
    } else {
      frequencyObj[charB]--;
    }
  }
  return true;
}
console.log(sameFrequency(1234, 1234));
console.log(sameFrequency(1232, 1234));
console.log(sameFrequency(1235, 1232));
