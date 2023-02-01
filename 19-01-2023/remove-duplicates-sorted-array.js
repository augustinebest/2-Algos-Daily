// Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */


const removeDuplicates = (nums) => {
  const hash = {};

  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      nums[i] = "_";
    } else {
      hash[nums[i]] = true;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "number") {
      count++;
    } 
  }

  return count;

};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1,1,2]));