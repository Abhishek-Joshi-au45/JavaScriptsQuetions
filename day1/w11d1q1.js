st="1234"
function atoi(st,n) {
    if(n==0){
        return Number(st)
    }
s=Number(st)+ n
return atoi(s,0);
}
s=atoi(st,3);
console.log(s);

