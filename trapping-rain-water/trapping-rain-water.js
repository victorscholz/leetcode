/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (!height.length) return 0;
  
  let sum = 0;
  let wallHeight = 0;
  let maxHeight = height[0];
  let heightIndex = 0;
  
  for (let i = 0; i < height.length; i++) {
    if (height[i] > maxHeight) {
      maxHeight = height[i]
      heightIndex = i
    }
  }
  
  for (let i = 0; i <= heightIndex; i++) {
    if (height[i] > wallHeight) {
      wallHeight = height[i]
    } else {
      sum += wallHeight - height[i]
    }
  }
  
  wallHeight = 0;
  
  for (let i = height.length - 1; i >= heightIndex; i--) {
    if (height[i] > wallHeight) {
      wallHeight = height[i]
    } else {
      sum += wallHeight - height[i]
    }
  }
  
  return sum;
};