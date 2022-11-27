n=Number(require("prompt-sync")()("Enter the length of Array"))
console.log(n);
c=[]
for(i=0;i<=n-1;i++){
    console.log("Enter index",i,"value");
    c[i]=(require("prompt-sync")()(""))
}
console.log(c);