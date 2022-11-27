/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    arr=[];
    nums.sort(so)
function so(a,b){
    return a-b
}
    for(let i=0; i<nums.length; i++){
    if (nums[i]==target)
        arr.push(i)
            }
    return arr 
};