/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
    let l = 0
    let r = nums.length-1
    while(l<=r){
    mid = Math.floor((l+r)/2)
    if((mid-1<0||nums[mid]>nums[mid-1]) && ((mid+1>=nums.length)||nums[mid]>nums[mid+1])){
    return mid
    }
    if(mid-1>= 0 && nums[mid-1]>=nums[mid]){
    r = mid-1
    }
    else if(mid+1 < nums.length && nums[mid+1]>=nums[mid]){
    l = mid+1
    }
    }
        return mid
    };