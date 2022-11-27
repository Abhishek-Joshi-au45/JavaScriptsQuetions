/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let sindex = -1
    let lindex= -1
   while (l<=r){
   mid = Math.floor((l+r)/2)
   if(nums[mid]<target){
   l = mid+1 
           }
   else if(nums[mid]>target){
    r = mid - 1 
           }
   else if(nums[mid]==target)
   {
   sindex =  mid;  
   r = mid-1
   }
   }
    l = 0;
    r = nums.length - 1;
   while (l<=r){
   mid2 = Math.floor((l+r)/2)
   if(nums[mid2]<target){
   l = mid2+1 
           }
   else if(nums[mid2]>target){
   r = mid2 - 1 
           }
    else if(nums[mid2]==target)
   {
   lindex =  mid2  ;
   l = mid2+1
   }
   }
   return [sindex,lindex] 
   };