/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  return  s.split(" ").filter(s => s.trim()).length
};

console.log(countSegments("Hello, my name is John"))
console.log(countSegments("Hello"))
console.log(countSegments(""))
console.log(countSegments("                "))