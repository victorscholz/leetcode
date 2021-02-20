/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (let i = 0; i < A.length; i++) {
      A[i].reverse();
      for (let j = 0; j < A[i].length; j++) {
        if (A[i][j] === 0) {
          A[i][j] = 1
        } else if (A[i][j] === 1){
          A[i][j] = 0
        };
      };
    };
  return A
};