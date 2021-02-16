/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) {
    return [];
  }

  nums.sort((a, b) => a - b);
  const quad = [];

  for (let i = 0; i < nums.length - 1; i++) {
    let base = nums[i];
    if (i > 0 && base === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      let next = nums[j];
      if (j > i + 1 && next === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const currentSum = base + next + nums[left] + nums[right];

        if (currentSum === target) {
          quad.push([base, next, nums[left], nums[right]]);
        }
        if (currentSum <= target) {
          while (nums[left] === nums[++left]);
        } else {
          while (nums[right] === nums[--right]);
        }
      }
    }
  }
  return quad;
};