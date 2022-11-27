arr = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3;
c=0;
var kWeakestRows = function(mat) {
   for(let i = 0; i<mat.length; i++){
       for(let j=0; j<mat[i].length; j++){
       if(mat[i][j]===1)
           c+=1;
       
   }
}
   return c;
};
s=kWeakestRows(arr);
console.log(s);