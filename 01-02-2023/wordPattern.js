/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  s = s.split(" ");
  if (pattern.length !== s.length) return false;

  const mapping = {};

  for (let i = 0; i < pattern.length; i++) {
    const c = pattern[i];
    if (c in mapping) {
      if (mapping[c] !== words[i]) return false;
    } else {
      if (Object.values(mapping).includes(words[i])) {
        return false;
      }
      mapping[c] = words[i];
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("ab", "happy hacking"));
console.log(wordPattern("abba", "dog cat cat fish"));
