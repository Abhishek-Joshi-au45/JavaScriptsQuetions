/* 50. Pow(x, n)
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000
*/



/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    // return x**n;
     if(n==0)
     return 1;
     if(n<0)
      return myPow(1/x,-n)
     if(n%2==0)
         {
      let h = myPow(x,n/2);
      return h*h;
        }
     else
         {
      let h = myPow(x,(n-1)/2)
      return x*h*h;
     }
 };
 let x = 2.00000 ;
 let n = 10;
 res = myPow(x,n)
 console.log(res);