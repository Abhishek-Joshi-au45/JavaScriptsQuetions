arr=[1,3,4,6,7,9,11,12,14]
target = 3;
l=0; 
r=arr.length-1
function bs(l,r,arr,target){
    mid=Math.floor((l+r)/2)
    if(arr[mid]<target){
        return bs(mid+1,r,arr,target)
    }
    else if(arr[mid]>target){
        return bs(l,mid-1,arr,target)
    }
   return mid

}
s= bs(l,r,arr,target)
console.log(s);