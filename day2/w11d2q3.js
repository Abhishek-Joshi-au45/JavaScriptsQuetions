function sum(n){
if(n>0){
    return n+sum(n-1)
}
return n
}
res = sum(4)
console.log(res);