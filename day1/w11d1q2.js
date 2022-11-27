function fun (num,i){
    if(i==num.length){
    return 
}
console.log(num[i])
fun(num,i+1)
}
s = 1234567
num1= s.toString()
res=fun(num1,0)
