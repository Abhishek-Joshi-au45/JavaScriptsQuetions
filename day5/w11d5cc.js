// Q1 ==>  Intersection of Two Arrays
/* Given two integer arrays nums1 and nums2, return an array of their
intersection. Each element in the result must be unique and you may return
the result in any order.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2] 
*/

// Solution 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const arr = [];
     const shortest = nums1.length < nums2.length ? nums1 : nums2;
     for(foreach of shortest) {
         
         if(nums1.includes(foreach) && nums2.includes(foreach) && !arr.includes(foreach)) {
             arr.push(foreach);
         }
     }
     return arr;
 };





 // Q-2 ) Merge Sorted Array 
 /* 
 You are given two integer arrays nums1 and nums2, sorted in
non-decreasing order, and two integers m and n, representing the number
of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing
order.
The final sorted array should not be returned by the function, but instead be
stored inside the array nums1. To accommodate this, nums1 has a length of
m + n, where the first m elements denote the elements that should be
merged, and the last n elements are set to 0 and should be ignored. nums2
has a length of n.
Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
 */

// Solution 

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let i = m;
    let j  = 0;  
    while(j<n){
       nums1[i]=nums2[j] 
        i++;
        j++;
    }
    

nums1.sort((a,b)=>a-b)
    return nums1
    
};







// Q-3 ) Sort Colors 
/*
Given an array nums with n objects colored red, white, or blue, sort them in-place
so that objects of the same color are adjacent, with the colors in the order red,
white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue,
respectively.
You must solve this problem without using the library's sort function.
*/

// Solution 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    c=nums
    c.sort((a,b)=>a-b)
    return c
};



