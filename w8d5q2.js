function sum(x,y,z, ...arr)
{
    console.log(arr);
    return x+y+z ;
}
a = [4,5,6,7,8,9]
res = sum(...a)
console.log(res);