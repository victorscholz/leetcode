/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = new Map();
  for (let num of nums) {
    if (obj.get(num)) {
      obj.delete(num);
    } else {
      obj.set(num, 1);
    }
  }
  return [...obj.keys()][0];
};
