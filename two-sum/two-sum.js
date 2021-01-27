/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const store = {}
  
  for (let i = 0; i < nums.length; i++) {
    const base = nums[i];
    const diff = target - base;
    
    if (store.hasOwnProperty(diff)) {
      return [store[diff], i];
    } else {
      store[nums[i]] = i
    }
  }
  
};
​
​
