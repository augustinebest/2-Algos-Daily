/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const getMapping = (str) => {
    const map = {};
    for (let i = 0; i < str.length; i++) {
      if (!(str[i] in map)) {
        map[str[i]] = 1;
      } else {
        map[str[i]]++;
      }
    }
    return map;
  };
  s = getMapping(s);
  t = getMapping(t);
  for (val in s) {
    if (s[val] !== t[val]) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
