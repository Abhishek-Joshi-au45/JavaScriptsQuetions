function mul(x,y){
if(x==0||y==0){
    return 0
}
if(x==1){
    return y
}
if(y==1){
    return x
}
s=x*y
return mul(s,1)
}
res = mul(5,5)
console.log(res);