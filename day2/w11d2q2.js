function findSum(n){
    if(n< 10){
       return n;
    }
    const l = n % 10;
    const r = Math.floor(n / 10);
    return (l+ findSum(r));
 }
 res= findSum(1234567);
 console.log(res);