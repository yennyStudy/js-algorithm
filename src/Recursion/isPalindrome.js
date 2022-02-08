function isPalindrome(string) {
  const first = string[0];
  const last = string[string.length - 1];

  if (!string) {
    return true;
  } else if (first === last) {
    return isPalindrome(string.slice(1, string.length - 1));
  } else {
    return false;
  }
}

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false
isPalindrome("");
isPalindrome("c");
isPalindrome("abbba");
