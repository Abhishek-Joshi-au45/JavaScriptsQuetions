// 70. Climbing Stairs
/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
*/

// Solve without DP



/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n === 1) return 1;
      if (n === 2) return 2;
      if (n === 3) return 3;
      
      let a = 0;
      let b = 2;
      let c = 3;
      
      for (let i = 3; i < n; i++){
        a = b
        b = c
        c = a + b   
      }
      
      return c;
    };
 let A = 6;
 res = climbStairs(A)
 console.log(res);   