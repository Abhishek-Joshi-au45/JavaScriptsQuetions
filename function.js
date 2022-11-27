//This is first program
function printMax(a, b){
     if (a > b){
     console.log(a, 'is maximum') }
     else if (a == b)
     console.log(a, 'is equal to', b)
     else
     console.log(b, 'is maximum') }
    printMax(3, 4)

//This is second program
x = 50;
 function func(x)
 {
 console.log('x is', x);
 x = 2;
 console.log('Changed local x to', x);
 }
 func(x)
 console.log('x is now', x)