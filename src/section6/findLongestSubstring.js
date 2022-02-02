function findLongestSubstring(string) {
  let maxLen = 0;
  const frequencyObj = {};
  let start = 0;
  let end = 0;
  frequencyObj[string[0]] = 1;
  while (start < string.length && end < string.length) {
    if (!frequencyObj[string[end + 1]]) {
      end++;
      frequencyObj[string[end]] = 1;
    } else if (frequencyObj[string[end + 1]] > 0) {
      frequencyObj[string[start]]--;
      start++;
    }
    if (start >= string.length || end >= string.length) break;
    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
    }
  }
  return maxLen;
}
findLongestSubstring("");
findLongestSubstring("rithmschool");
findLongestSubstring("thisisawesome");
findLongestSubstring("thecatinthehat");
findLongestSubstring("bbbbbbb");
findLongestSubstring("longestsubstring");
findLongestSubstring("thisishowwedoit");
