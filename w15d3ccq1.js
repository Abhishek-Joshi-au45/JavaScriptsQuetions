/*
347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent
elements. You may return the answer in any order.
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let map = new Map()
    let res = []
    for(let num of nums){
        map.set(num, map.get(num) + 1 || 1)
    }
    map.forEach((value, key) => {
        res.push([key,value])
    })
    res.sort((a, b) => b[1] - a[1])
    return res.slice(0, k).map(x => x[0])
};
let arr = [1,1,1,2,2,3];
let k = 2
let res = topKFrequent(arr,k)
console.log(res);