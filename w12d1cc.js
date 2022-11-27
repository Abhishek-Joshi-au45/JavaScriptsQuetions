// Q-1 ) Squares of a Sorted Array: 
/*
Given an integer array nums sorted in non-decreasing order, return an array of the
squares of each number sorted in non-decreasing order.
Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]
*/
// Solution 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    arr=[];
    for(let i=0; i<nums.length; i++){
        arr.push(nums[i]*nums[i])
    }
    arr.sort((a,b)=>a-b)
    return arr;
};
A1=[-4,-1,0,3,10];
res1 = sortedSquares(A1)
console.log(res1);






// Q-2 ) Reverse String: 
/*
Write a function that reverses a string. The input string is given as an array of characters
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/
//Solution

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let left = 0;
     let right = s.length - 1;
     
     while (left <= right) {
         [s[left], s[right]] = [s[right], s[left]];
         right--;
         left++;
     }
     return s;
   };
A2=["h","e","l","l","o"];
res2 = reverseString(A2)
console.log(res2);







// Q-3 )Maximum Ascending Subarray Sum:
/*
Given an array of positive integers nums, return the maximum possible sum of an
ascending subarray in nums.
A subarray is defined as a contiguous sequence of numbers in an array.
A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r,
numsi < numsi+1. Note that a subarray of size 1 is ascending.
Example 1:
Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
*/
// Solution 

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    result=nums[0];
    sum=nums[0];
    for (let i=1; i<=nums.length ; i++){
        if(nums[i]>nums[i-1]){
            result+=nums[i]
        }
        else{
            if(result>sum)
                sum=result;
            result=nums[i];
        }
    }
    if(result>sum) 
        sum = result;
         return sum;
};

A3=[10,20,30,5,10,50]
res3 = maxAscendingSum(A3);
console.log(res3);








//  [Bonus Question] Move Zeroes:
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative
order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
// Solution 

var moveZeroes = function(nums) {
    let arr=[];
    let arr2=[];
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==0){
            arr.push(nums[i])
        }
            if(nums[i]===0){
                arr2.push(nums[i])
            }
        
        
    }
    return arr.concat(arr2)
};
A4=[0,12,0,3,12,0]
res4 = moveZeroes(A4)
console.log(res4)