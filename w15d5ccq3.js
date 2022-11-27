/*
1143. Longest Common Subsequence
Given two strings text1 and text2, return the length of their longest common
subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with
some characters (can be none) deleted without changing the relative order of the
remaining characters.
● For example, "ace" is a subsequence of "abcde".
*/




/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    let dp = new Array(text1.length+1).fill(0).map(()=>new Array(text2.length+1).fill(0));
     for (let i=1;i<dp.length;i++) {
         for (let j=1;j<dp[0].length;j++) {    
             if (text1[i-1] == text2[j-1]) {
                 dp[i][j] = dp[i-1][j-1] + 1;
             } else {
                 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
             }
         }
     }
         
     return dp[dp.length-1][dp[0].length-1]; 
 };
let str1 = "ABCDGHzhb"
let str2 = "AEDFHRzjb"
res = longestCommonSubsequence(str1,str2)
console.log(res);