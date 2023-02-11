/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    if (s[left] !== s[right]) {
      // Try deleting the character at `left`
      let tempLeft = left + 1;
      let tempRight = right;
      while (tempLeft < tempRight && s[tempLeft] === s[tempRight]) {
        tempLeft++;
        tempRight--;
      }
      
      if (tempLeft >= tempRight) {
        // Deleting the character at `left` makes the string a palindrome
        return true;
      }
      
      // Try deleting the character at `right`
      tempLeft = left;
      tempRight = right - 1;
      while (tempLeft < tempRight && s[tempLeft] === s[tempRight]) {
        tempLeft++;
        tempRight--;
      }
      
      if (tempLeft >= tempRight) {
        // Deleting the character at `right` makes the string a palindrome
        return true;
      }
      
      // Deleting either character at `left` or `right` does not make the string a palindrome
      return false;
    }
    
    left++;
    right--;
  }
  
  return true;
};

console.log(validPalindrome("aba"))
console.log(validPalindrome("abca"))
console.log(validPalindrome("abc"))