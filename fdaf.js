// A function declaration by expression, and convert it into an arrow function
// This is function declaration by expression 
const f = function Average(b,c)
{
    a=(b+c)/2
    console.log(" This is the Average by expression\n",a);
    return a;
}
f(5,3)
// We convert it into arrow function
const g = (d,e) => (d+e)/2;
let i = g(3,3)
console.log("This is Average by arrow function\n",i);


