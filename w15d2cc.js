/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    let n = nums.length
    nums.sort((a,b)=>a-b)
    return nums[n-k]
};
let nums = [3,2,1,5,6,4];
let k = 2;
let res = findKthLargest(nums,k)
console.log(res);