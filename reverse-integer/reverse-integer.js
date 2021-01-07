/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let r = parseInt(x.toString().split("").reverse().join(''));
    
    if (x < 0){
      r *= -1;
    }
  
    if (r < (-1 * Math.pow(2, 31)) || r > Math.pow(2, 31)) return 0;
    return r;
};
​
