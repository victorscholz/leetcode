/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const collection = {};
  for(let i = 0; i < nums.length; i++){
    if(collection[nums[i]] >= 0){
      return [collection[nums[i]], i]
    }
    collection[target - nums[i]] = i
  }
};
​
​
