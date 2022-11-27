/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (i=0;i<nums.length ; i++){
        for(j=i+1; j<nums.length;j++){
            if(nums[i]+nums[j]==target)
                return [i,j]
        }
    }
};

// Second solution 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    ht={}
        for(let i=0;i<nums.length ; i++){
            missing=target-nums[i]
            if(missing in ht){
                return[i,ht[missing]]
            }
            ht[nums[i]]=i
        }
    };