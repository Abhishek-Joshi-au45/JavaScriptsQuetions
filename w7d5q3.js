let n = Number(require("prompt-sync")()("enter the lenght"))
if(n>10){
console.log(n);
let c=[]
for(let i=0; i<=n-1; i++)
{
    console.log("enter", i,"index valus");
    c[i]=Number(require("prompt-sync")()(""))
}
console.log(c);
const sum = c.reduce((a, b) => a + b, 0);
const avg = (sum / c.length) || 0;
console.log(avg);
}
else{
    console.log("The length is not > tha 10")
}