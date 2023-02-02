/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sPointer = 0;
  let tPointer = 0;

  while (tPointer <= t.length) {
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
      tPointer++;
    } else {
      tPointer++;
    }
  }

  if (sPointer > s.length) return true;
  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
