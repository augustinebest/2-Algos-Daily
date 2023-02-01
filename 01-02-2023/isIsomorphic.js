/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isIsomorphic(s, t) {
  const getPattern = (str) => {
    const map = new Map();
    let id = 0,
      pattern = "";
    for (let i = 0; i < str.length; i++) {
      if (!map.has(str[i])) {
        map.set(str[i], ++id);
      }

      pattern += map.get(str[i]);
    }

    return pattern;
  };

  return getPattern(s) === getPattern(t);
}

console.log(isIsomorphic("abc", "aaa"));
console.log(isIsomorphic("egg", "add"));
