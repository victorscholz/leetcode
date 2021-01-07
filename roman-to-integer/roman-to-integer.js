/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  
  let rNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
​
  let runningTotal = 0;
  let prevTotal = 0;
​
  for (let i of s) {
    let currentNum = rNum[i];
    runningTotal += currentNum;
​
    if (prevTotal < currentNum) {
      runningTotal -= 2*prevTotal;
    }
    prevTotal = currentNum;
  }
  return runningTotal;
};
