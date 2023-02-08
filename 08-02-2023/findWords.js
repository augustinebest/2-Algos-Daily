/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");

  const res = [];

  for (const word of words) {
    if (
      canBeTyped(word, row1) ||
      canBeTyped(word, row2) ||
      canBeTyped(word, row3)
    )
      res.push(word);
  }

  function canBeTyped(word, row) {
    for (const char of word) {
      if (!row.has(char.toLowerCase())) return false;
    }
    return true;
  }

  return res;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk"]))
console.log(findWords(["adsdf","sfd"]))
