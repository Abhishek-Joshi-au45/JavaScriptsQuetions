// Fibonacci Number - solve with using DP



/**
 * @param {number} n
 * @return {number}
 */

 let dp=new Array(101);
 dp = new Array(101);
 dp.fill(null)
 dp[0] = 0
 dp[1] = 1
 var fib = function(n) {
 if (dp[n]!=null){
 return dp[n]
 }
 dp[n] = fib(n-1)+fib(n-2)
 return dp[n]
 };
 let A = 4;
let res = fib(A)
console.log(res);