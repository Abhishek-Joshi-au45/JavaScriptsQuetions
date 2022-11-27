// Q-1 ) Select the appropriate code that performs selection sort. 
// a) => Correct ans
/*
for j in range(n):
min = j
for k in range(j+1,n):
if(arr[k] < arr[min])
min = k
temp = arr[min]
arr[min] = arr[j]
arr[j] = temp
*/
// a is correct otion





// Q-2 ) What is the worst case complexity of selection sort? (5 marks)
// a) O(nlogn)
// b) O(logn)
// c) O(n)
// d) O(n^2)  correct
// worst case complexity of selection sort == O(n^2)





// Q-3 ) Write a program to perform selection sort without using an auxiliary (extra) list, and tell the time complexity and space complexity of your code.
let arr=[5,3,2,6,4,1]
function selectionSort(arr)
{    let n=arr.length
   for (let i = 0; i < n; i++)
    { let  min_idx = i;
        for (let j = i + 1; j < n; j++){
        if (arr[min_idx] > arr[j])
            min_idx = j;}
 [arr[min_idx],arr[i]]=[arr[i],arr[min_idx]]
    }
    return arr
}
res = selectionSort(arr)
console.log(res)






// Q-4 )[BONUS QUESTION] Write a while loop implementation of selection sort?
let arr2=[5,3,2,6,4,1,9,8]
function selectionSortWhile(arr)
{    let n=arr.length
    let i=0;
   while (i < n)
    { let  min_idx = i;
        let j=i+1;
        while (j < n){
        if (arr[min_idx] > arr[j])
            min_idx = j;
            j++
        }
 [arr[min_idx],arr[i]]=[arr[i],arr[min_idx]]
 i++
    }
    return arr
}
result = selectionSortWhile(arr2)
console.log(result);
