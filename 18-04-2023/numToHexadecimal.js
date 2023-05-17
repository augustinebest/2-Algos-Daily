/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  const result = [];
  const base = 16;

  if(num < 0) num = num >>> 0

  if(num === 0) return "0"

  while (num != 0) {
    result.push(num % base);
    num = Math.floor(num / base);
  }

  const hex = {
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };

  for (let i = 0; i < result.length; i++) {
    if (result[i] >= 10) {
      result[i] = hex[result[i]];
    }
  }

  return result.reverse().join("");
};

console.log(toHex(26))
console.log(toHex(123));
console.log(toHex(-1));
console.log(toHex(0));
