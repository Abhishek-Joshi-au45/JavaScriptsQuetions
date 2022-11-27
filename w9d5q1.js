let a = [[1,2,3],[4,5,6]]
//console.log(a[0][2]);
n=a.length
m=a[0].length
// console.log(n,m);
for(i=0; i<n; i++){
    j=m-1-i;
    console.log(a[i][j]);
}