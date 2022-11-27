function fun(a)
{
    return function(b)
    {
        return function(c)
        {
            return a+b+c ;
        }
    }
}
res = fun (1)(2)(3)
console.log(res);