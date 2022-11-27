// Q-1 ) Number of Good Pairs:
/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.
Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
*/

// Solution

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    map={}
    let c= 0
    for(number of nums){
        if (map[number]===undefined){
            map[number]=1
        }
        else{
            c+=map[number]
            map[number]+=1
        }
    }
    return c
};
A1 = [1,2,3,1,1,3]
res1 = numIdenticalPairs(A1)
console.log(res1);








// Q - 2) Longest Substring Without Repeating Characters (Medium) 
/*
Given a string s, find the length of the longest substring without repeating
characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

// Solution 

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    HT={}
    let start=0;
    let maxlen=0;
    for(let end = 0; end < s.length; end++){
        if(s[end] in HT && start<=HT[s[end]]){
        start = HT[s[end]]+1
        }
        else{
            maxlen = Math.max(maxlen , end-start+1)
        }
        HT[s[end]]=end
    }
    return maxlen ; 
};
A2="abcabcbb";
res2=lengthOfLongestSubstring(A2)
console.log(res2);








// Q - 3) Two Sum
/*
Given an array of integers nums and an integer target, return indices of the two
numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may
not use the same element twice.
You can return the answer in any order.
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// Solution 

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
 A3=[2,7,11,15]
 target = 9 ;
 res3 = twoSum(A3,target)
 console.log(res3);
 