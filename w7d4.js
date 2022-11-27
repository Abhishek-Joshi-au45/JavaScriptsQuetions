/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
   
    n=BigInt(digits.join("")) 
    n++
    const b =n.toString() 
    const c =b.split("") 
    const d =c.map(Number)
    return d


    
};