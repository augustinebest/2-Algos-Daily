/**
 * @param {string} word
 * @return {boolean}
 */

const detectCapitalUse = (word) => {
  return (
    word === word.toUpperCase() || word.slice(1) === word.slice(1).toLowerCase()
  );
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("leetcode"));
console.log(detectCapitalUse("Google"));
