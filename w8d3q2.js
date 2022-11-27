function myFunc(a)
{
    return function(b)
    {
        return function(c)
        {
            return (a+b)/c ;
        }
    }
}
res = myFunc (3)(6)(3)
console.log(res);