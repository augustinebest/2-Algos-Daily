/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  let charValue = new Set();
  let result = 0;

  for (let char of s) {
    if (charValue.has(char)) {
      result += 2;
      charValue.delete(char);
    } else {
      charValue.add(char, 1);
    }
  }
  return result + (charValue.size > 0 ? 1 : 0);
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));