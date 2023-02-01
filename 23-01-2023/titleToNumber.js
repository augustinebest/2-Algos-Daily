/**
 * @param {string} columnTitle
 * @return {number}
 */

var titleToNumber = function (columnTitle) {
  let sum = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const baseNum = columnTitle.charCodeAt(i) - 64;

    sum = sum + Math.pow(26, columnTitle.length - 1 - i) * baseNum;
  }

  return sum;
};

console.log(titleToNumber("ABC"));
console.log(titleToNumber("AB"));
