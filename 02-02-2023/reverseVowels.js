/**
 * @param {string} s
 * @return {string}
 */

const reverseVowels = (s) => {
  const output = s.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (
      vowels.includes(s[left].toLowerCase()) &&
      vowels.includes(s[right].toLowerCase())
    ) {
      [output[left], output[right]] = [output[right], output[left]];
      left++;
      right--;
    }

    if (!vowels.includes(s[left].toLowerCase())) {
      left++;
    }

    if (!vowels.includes(s[right].toLowerCase())) {
      right--;
    }
  }
  return output.join("");
};

console.log(reverseVowels("hello"));
