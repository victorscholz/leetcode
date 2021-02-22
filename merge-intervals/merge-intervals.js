/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])
  
  let results = [];
  let previous = intervals[0];
  
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    if (previous[1] >= current[0]) {
      previous[1] = Math.max(previous[1], current[1])
    } else {
      results.push(previous);
      previous = current;
    }
  }
  results.push(previous);
  return results
};