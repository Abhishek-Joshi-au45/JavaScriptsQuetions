var a = Number(require("prompt-sync")()("Enetr a value"));
console.log(a);
f=0;
if(a==1)
{
console.log("1 is not a prime number and it is not a composite number");
}
else{
if(a==2)
{ console.log("This is the prime Number")}
    else{
    for(i=2; i<a; i++)
    if(a%i==0)
    {
        f=1
        break
    
   }
   if(f==1)
   {
       console.log("This is not the Prime Number");
   }
   else{
       console.log("This is the Prime Number");
   }}}
