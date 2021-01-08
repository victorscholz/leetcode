/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = [];
    let currentTotal = 0;
    for (let i = 0; i < nums.length; i++){
      currentTotal += nums[i];
      arr.push(currentTotal);
    }
    return arr;
};
