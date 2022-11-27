// Q1:Fibonacci Number - solve without DP



/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n==0||n==1){
        return n
    }
    return fib(n-1)+fib(n-2)
};
let A = 4;
let res = fib(A)
console.log(res);