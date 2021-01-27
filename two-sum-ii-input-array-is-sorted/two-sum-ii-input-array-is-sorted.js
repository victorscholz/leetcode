/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  let answer = [];
​
  while (start < end) {
    let sum = numbers[start] + numbers[end]
    if (sum === target) {
      answer.push(start + 1, end + 1) 
      return answer
    } else if (sum > target){
      end --
    } else {
      start ++
    } 
  }
};
