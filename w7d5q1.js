let n = Number(require("prompt-sync")()("enter the lenght"))
if(n>10){
console.log(n);
let c=[]
for(let i=0; i<=n-1; i++)
{
    console.log("enter", i,"index valus");
    c[i]=require("prompt-sync")()("")
}
console.log(c);

let j = c.slice(2,9)
console.log(j);
console.log(c);
}

else{
    console.log("The length of Array is not > 10");
}