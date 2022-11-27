// Q-1 )Trapping Rain Water 
/*
Given n non-negative integers representing an elevation map where the width of
each bar is 1, compute how much water it can trap after raining.
Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by
array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are
being trapped.
*/



/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
let result = 0;
let left = 0;
let right = height.length - 1;
let leftMax = 0;
let rightMax = 0;
while (left < right) {
    if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
            leftMax = height[left];
        } else {
result += leftMax - height[left];
     }
   left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
        } else {
    result += rightMax - height[right];
        }
       right--;
       }
   }
 return result;
};
A = [0,1,0,2,1,0,1,3,2,1,2,1]
res = trap(A)
console.log(res);